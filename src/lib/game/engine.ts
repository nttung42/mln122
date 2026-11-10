import { EconomicMetrics, RoundId, SimulationResult } from "@/types/game";
import { BASELINE_METRICS, GAME_ROUNDS } from "./data";

export function clampMetric(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function calculateMetrics(
  selectedChoices: Record<RoundId, string | null>
): EconomicMetrics {
  const metrics: EconomicMetrics = { ...BASELINE_METRICS };

  const r1 = selectedChoices[1];
  const r2 = selectedChoices[2];
  const r3 = selectedChoices[3];

  // Apply round-by-round impacts
  GAME_ROUNDS.forEach((round) => {
    const choiceId = selectedChoices[round.id];
    if (!choiceId) return;

    const choice = round.choices.find((c) => c.id === choiceId);
    if (!choice) return;

    if (choice.impacts.domesticValueCapture) {
      metrics.domesticValueCapture += choice.impacts.domesticValueCapture;
    }
    if (choice.impacts.techCapability) {
      metrics.techCapability += choice.impacts.techCapability;
    }
    if (choice.impacts.employmentIncome) {
      metrics.employmentIncome += choice.impacts.employmentIncome;
    }
    if (choice.impacts.economicAutonomy) {
      metrics.economicAutonomy += choice.impacts.economicAutonomy;
    }
    if (choice.impacts.sustainability) {
      metrics.sustainability += choice.impacts.sustainability;
    }
  });

  // Synergy & Cross-round modifier 1: TECH_FIRST + HUMAN_CAPITAL
  if (r1 === "TECH_FIRST" && r2 === "HUMAN_CAPITAL") {
    metrics.techCapability += 10;
    metrics.domesticValueCapture += 10;
  }

  // Synergy & Cross-round modifier 2: FDI_FIRST + AUTOMATION_FIRST (Clash)
  if (r1 === "FDI_FIRST" && r2 === "AUTOMATION_FIRST") {
    metrics.employmentIncome -= 10;
    metrics.economicAutonomy -= 10;
  }

  // Synergy & Cross-round modifier 3: DOMESTIC_LINKAGE + (OWN_TECHNOLOGY or BUILD_BRANDS)
  if (r1 === "DOMESTIC_LINKAGE" && (r3 === "OWN_TECHNOLOGY" || r3 === "BUILD_BRANDS")) {
    metrics.domesticValueCapture += 10;
    metrics.economicAutonomy += 10;
  }

  return {
    domesticValueCapture: clampMetric(metrics.domesticValueCapture),
    techCapability: clampMetric(metrics.techCapability),
    employmentIncome: clampMetric(metrics.employmentIncome),
    economicAutonomy: clampMetric(metrics.economicAutonomy),
    sustainability: clampMetric(metrics.sustainability),
  };
}

export function generateSimulationResult(
  selectedChoices: Record<RoundId, string | null>
): SimulationResult {
  const metrics = calculateMetrics(selectedChoices);
  const r1 = selectedChoices[1] || "";
  const r2 = selectedChoices[2] || "";
  const r3 = selectedChoices[3] || "";

  // Archetype Classification based on dominant metrics and choices
  if (metrics.techCapability >= 70 && metrics.domesticValueCapture >= 65) {
    return {
      archetypeId: "TECH_SOVEREIGN",
      archetypeTitle: "Chủ thể Công nghệ & Tự chủ Chiến lược",
      tagline: "Vượt bẫy gia công bằng tự chủ công nghệ lõi và lao động phức tạp",
      summary:
        "Bạn đã đưa Việt Nam trở thành quốc gia làm chủ công nghệ cao với năng lực thiết kế vi mạch, bằng sáng chế và tỷ lệ giá trị gia tăng nội địa vượt trội. Nền kinh tế dịch chuyển lên đỉnh nguồn của Đường cong nụ cười.",
      metrics,
      keyStrengths: [
        "Sở hữu năng lực R&D và thiết kế công nghệ lõi đạt chuẩn quốc tế",
        "Tỷ lệ giá trị thặng dư (m) giữ lại trong nước tăng vọt",
        "Khả năng chống chịu cao trước các lệnh trừng phạt hoặc đứt gãy công nghệ",
      ],
      keyVulnerabilities: [
        "Đòi hỏi nguồn vốn đầu tư công và R&D liên tục để duy trì vị thế",
        "Chênh lệch thu nhập giữa kỹ sư công nghệ cao và lao động phổ thông cần chính sách tái phân phối",
      ],
      strategicTradeoffsAccepted: [
        "Chấp nhận hy sinh tăng trưởng cơ học số lượng việc làm giản đơn để tập trung vào chất lượng lao động",
        "Chấp nhận thời gian thu hồi vốn dài và rủi ro R&D cao",
      ],
      alternativePolicyRecommendation:
        "Tăng cường mạng lưới an sinh xã hội và hỗ trợ chuyển đổi nghề nghiệp cho các nhóm lao động bị thay thế bởi tự động hóa.",
      academicReflection:
        "Chiến lược này phản ánh quy luật nâng cao Cấu tạo hữu cơ của tư bản (c/v) có định hướng: biến sức lao động thành lao động phức tạp để thu hoạch giá trị thặng dư siêu ngạch từ độc quyền công nghệ.",
    };
  }

  if (metrics.sustainability >= 60 && metrics.economicAutonomy >= 60) {
    return {
      archetypeId: "BALANCED_MODERNIZER",
      archetypeTitle: "Nhà Kiến tạo Hệ sinh thái Bền vững",
      tagline: "Hài hòa giữa tăng trưởng nội lực, phúc lợi lao động và bảo vệ môi trường",
      summary:
        "Bạn đã xây dựng một nền kinh tế cân bằng, trong đó doanh nghiệp nội địa liên kết chặt chẽ với FDI, phúc lợi người lao động được nâng cao và tiêu chuẩn xanh trở thành lợi thế cạnh tranh dài hạn.",
      metrics,
      keyStrengths: [
        "Hệ sinh thái nhà cung cấp nội địa bền vững, giảm thiểu nhập siêu linh kiện",
        "Môi trường làm việc lành mạnh, thu nhập thực tế của người lao động tăng ổn định",
        "Đáp ứng hoàn hảo các tiêu chuẩn ESG và chuỗi cung ứng xanh toàn cầu",
      ],
      keyVulnerabilities: [
        "Tốc độ bứt phá về xuất khẩu quy mô lớn có thể chậm hơn các đối thủ cạnh tranh bằng giá rẻ",
      ],
      strategicTradeoffsAccepted: [
        "Từ chối các dự án FDI gây ô nhiễm hoặc thâm dụng lao động giá rẻ",
        "Chia sẻ lợi nhuận ngắn hạn để đầu tư phát triển nguồn nhân lực và môi trường",
      ],
      alternativePolicyRecommendation:
        "Đẩy mạnh các cơ chế hỗ trợ tài chính vi mô để doanh nghiệp phụ trợ nội địa mở rộng quy mô ra thị trường khu vực.",
      academicReflection:
        "Mô hình thể hiện rõ vai trò kiến tạo của Nhà nước trong KTTT định hướng XHCN: phát triển lực lượng sản xuất gắn liền với quan hệ sản xuất tiến bộ và an sinh xã hội.",
    };
  }

  if (metrics.employmentIncome >= 70 && metrics.domesticValueCapture < 50) {
    return {
      archetypeId: "GLOBAL_ASSEMBLY_HUB",
      archetypeTitle: "Đại Công xưởng Lắp ráp Toàn cầu",
      tagline: "Quy mô xuất khẩu khổng lồ nhưng biên lợi nhuận mỏng",
      summary:
        "Việt Nam đã trở thành trung tâm sản xuất và lắp ráp điện tử hàng đầu thế giới với kim ngạch xuất khẩu kỷ lục. Hàng triệu việc làm được tạo ra, nhưng nền kinh tế vẫn chịu sự phụ thuộc lớn vào quyết định của các tập đoàn đa quốc gia.",
      metrics,
      keyStrengths: [
        "Sản lượng xuất khẩu và thu hút dòng vốn FDI đạt đỉnh cao lịch sử",
        "Tạo việc làm tức thì và ổn định thu nhập cho lực lượng lao động phổ thông",
      ],
      keyVulnerabilities: [
        "Mắc kẹt ở đáy 'Đường cong nụ cười' — nhập khẩu linh kiện cao, giá trị nội địa mỏng",
        "Nguy cơ thất thoát dòng vốn khi chi phí nhân công tăng hoặc ưu đãi hết hạn",
        "Áp lực lớn lên hạ tầng điện nước, tài nguyên và khí thải",
      ],
      strategicTradeoffsAccepted: [
        "Đánh đổi quyền tự chủ công nghệ và lợi nhuận thặng dư cao để đổi lấy số lượng việc làm đại trà",
      ],
      alternativePolicyRecommendation:
        "Cần nhanh chóng ban hành các tiêu chuẩn bắt buộc về chuyển giao công nghệ và hỗ trợ đào tạo tay nghề để không bị động khi làn sóng dịch chuyển tiếp theo xảy ra.",
      academicReflection:
        "Minh chứng điển hình cho việc hiện thực hóa giá trị tư bản khả biến (v) của lao động giản đơn trong khi phần lớn giá trị thặng dư (m) chảy về công ty mẹ xuyên quốc gia thông qua cơ chế chuỗi giá trị toàn cầu.",
    };
  }

  // Default fallback archetype: The Pragmatic Transitioner
  return {
    archetypeId: "PRAGMATIC_TRANSITIONER",
    archetypeTitle: "Chiến lược Gia Quá độ Thực tế",
    tagline: "Quản trị các đánh đổi và chuyển giao từng bước",
    summary:
      "Bạn đã chọn phương án trung hòa, kết hợp giữa tận dụng dòng vốn ngoại và từng bước nâng cấp năng lực nội địa. Đây là con đường quá độ thực tế giúp nền kinh tế duy trì tăng trưởng trong khi chuẩn bị lực lượng cho bước nhảy vọt tiếp theo.",
    metrics,
    keyStrengths: [
      "Tránh được các cú sốc thất nghiệp quy mô lớn",
      "Duy trì thặng dư cán cân thanh toán và thu hút FDI ổn định",
    ],
    keyVulnerabilities: [
      "Nguy cơ bị vượt mặt bởi các nền kinh tế có chiến lược đột phá dứt khoát hơn",
    ],
    strategicTradeoffsAccepted: [
      "Chấp nhận tiến trình nâng cấp diễn ra tuần tự thay vì đột phá nhanh",
    ],
    alternativePolicyRecommendation:
      "Tập trung mũi nhọn vào một vài lĩnh vực ngách có lợi thế so sánh động như chip đóng gói kiểm thử (ATP) hoặc phần mềm nhúng.",
    academicReflection:
      "Phản ánh đúng bản chất thời kỳ quá độ: chấp nhận sự tồn tại của nhiều thành phần kinh tế và sự phân chia giá trị thặng dư quốc tế như một quy luật khách quan để tích lũy nội lực.",
  };
}

