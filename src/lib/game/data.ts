import { EconomicMetrics, GameRound } from "@/types/game";

export const BASELINE_METRICS: EconomicMetrics = {
  domesticValueCapture: 35,
  techCapability: 30,
  employmentIncome: 60,
  economicAutonomy: 40,
  sustainability: 50,
};

export const GAME_ROUNDS: GameRound[] = [
  {
    id: 1,
    title: "Vòng 1: Mô hình Động lực Tăng trưởng",
    subtitle: "Xác định vai trò của FDI và Doanh nghiệp Nội địa",
    macroContext:
      "Tái định hình chuỗi cung ứng toàn cầu sau làn sóng dịch chuyển sản xuất. Các tập đoàn đa quốc gia tìm kiếm điểm đến mới tại Đông Nam Á.",
    scenario:
      "Việt Nam đứng trước ngã rẽ: Tiếp tục ưu đãi tối đa để hút vốn FDI gia công quy mô lớn, đầu tư phát triển hệ sinh thái liên kết nội địa, hay mạo hiểm dồn lực tự chủ công nghệ lõi?",
    choices: [
      {
        id: "FDI_FIRST",
        code: "1A",
        title: "Ưu tiên Thu hút FDI Quy mô Lớn",
        subtitle: "Tận dụng làn sóng dịch chuyển công xưởng toàn cầu",
        description:
          "Tối đa hóa ưu đãi thuế, đất đai và thủ tục hành chính để đón các tập đoàn Big Tech mở rộng nhà máy lắp ráp thiết bị điện tử.",
        tradeoffs: {
          upside: "Kim ngạch xuất khẩu bùng nổ, tạo ngay hàng trăm ngàn việc làm lắp ráp mới.",
          downside: "Tỷ lệ nội địa hóa thấp, lợi nhuận thặng dư (m) chảy về công ty mẹ nước ngoài, rủi ro chuyển dịch vốn khi hết ưu đãi.",
        },
        impacts: {
          domesticValueCapture: 5,
          techCapability: 10,
          employmentIncome: 15,
          economicAutonomy: -15,
          sustainability: -5,
        },
        theoreticalLink: "Tăng trưởng dựa vào tư bản bất biến (c) ngoại nhập, giá trị giữ lại chủ yếu là tiền lương gia công giản đơn (v).",
      },
      {
        id: "DOMESTIC_LINKAGE",
        code: "1B",
        title: "Phát triển Hệ sinh thái Liên kết Nội địa",
        subtitle: "Gắn kết doanh nghiệp trong nước vào chuỗi cung ứng",
        description:
          "Yêu cầu cam kết chuyển giao công nghệ và tỷ lệ nội địa hóa; hỗ trợ tài chính cho doanh nghiệp công nghiệp phụ trợ trong nước.",
        tradeoffs: {
          upside: "Gia tăng giá trị gia tăng nội địa (DVA), tạo nền tảng vững chắc cho công nghiệp tự chủ.",
          downside: "Tốc độ thu hút dự án FDI mới có thể chậm hơn do đòi hỏi tiêu chuẩn và cam kết liên kết cao hơn.",
        },
        impacts: {
          domesticValueCapture: 20,
          techCapability: 15,
          employmentIncome: 10,
          economicAutonomy: 15,
          sustainability: 5,
        },
        theoreticalLink: "Chuyển dần việc tích lũy tư bản vào tay doanh nghiệp nội địa, giữ lại phần thặng dư (m) để tái đầu tư xã hội.",
      },
      {
        id: "TECH_FIRST",
        code: "1C",
        title: "Đột phá Công nghệ & R&D Tự chủ",
        subtitle: "Đầu tư quốc gia vào vi mạch bán dẫn và AI chuyên dụng",
        description:
          "Dành ngân sách lớn lập quỹ R&D quốc gia, phòng thí nghiệm thiết kế chip và vườn ươm công nghệ sâu (Deep-tech).",
        tradeoffs: {
          upside: "Tạo bước nhảy vọt về năng lực nghiên cứu, sở hữu tài sản trí tuệ và vị thế đàm phán quốc tế.",
          downside: "Đòi hỏi nguồn vốn cực lớn, chu kỳ sinh lời dài và rủi ro thương mại hóa thất bại nếu thiếu thị trường đầu ra.",
        },
        impacts: {
          domesticValueCapture: 15,
          techCapability: 25,
          employmentIncome: -5,
          economicAutonomy: 20,
          sustainability: 0,
        },
        theoreticalLink: "Chủ động nâng cao Cấu tạo hữu cơ của tư bản (c/v), chuyển hướng sang thu hoạch giá trị thặng dư siêu ngạch từ độc quyền tri thức.",
      },
    ],
  },
  {
    id: 2,
    title: "Vòng 2: Chiến lược Lao động & Năng suất",
    subtitle: "Chuyển đổi Hàng hóa Sức lao động trong kỷ nguyên Tự động hóa",
    macroContext:
      "Trí tuệ nhân tạo (AI) và robot công nghiệp làm giảm nhu cầu lao động giản đơn. Các quốc gia khác cạnh tranh gay gắt về chi phí nhân công rẻ.",
    scenario:
      "Việt Nam đối mặt nguy cơ mắc kẹt ở 'bẫy gia công chi phí thấp' khi lợi thế dân số vàng dần qua đi.",
    choices: [
      {
        id: "COST_ADVANTAGE",
        code: "2A",
        title: "Duy trì Lợi thế Chi phí Cạnh tranh",
        subtitle: "Kiểm soát chi phí nhân công để giữ chân đơn hàng",
        description:
          "Giữ mức lương tối thiểu tăng chậm, linh hoạt hóa quy định làm thêm giờ nhằm duy trì sức hút với các ngành thâm dụng lao động.",
        tradeoffs: {
          upside: "Bảo toàn số lượng việc làm hiện tại trong các ngành dệt may, da giày và gia công điện tử cơ bản.",
          downside: "Khóa chặt công nhân ở mức lương thấp, không có động lực nâng cấp công nghệ, dễ bị thay thế bởi các nước nghèo hơn.",
        },
        impacts: {
          domesticValueCapture: -5,
          techCapability: -10,
          employmentIncome: -10,
          economicAutonomy: -10,
          sustainability: -10,
        },
        theoreticalLink: "Kéo dài phương pháp sản xuất giá trị thặng dư tuyệt đối; hàng hóa sức lao động bị tái sản xuất ở chuẩn mức sinh hoạt thấp.",
      },
      {
        id: "HUMAN_CAPITAL",
        code: "2B",
        title: "Đầu tư Đột phá Nguồn nhân lực Chất lượng cao",
        subtitle: "Chiến lược 50.000 kỹ sư bán dẫn và tài năng số",
        description:
          "Cải cách giáo dục đại học, tài trợ học bổng STEM/AI, kết hợp đào tạo kép giữa nhà trường và doanh nghiệp công nghệ cao.",
        tradeoffs: {
          upside: "Biến sức lao động Việt Nam thành 'lao động phức tạp' có năng suất cao, thu nhập người lao động tăng bền vững.",
          downside: "Cần thời gian 5-10 năm để thấy rõ kết quả, tạo áp lực ngân sách lớn lên hệ thống giáo dục quốc dân.",
        },
        impacts: {
          domesticValueCapture: 15,
          techCapability: 20,
          employmentIncome: 20,
          economicAutonomy: 10,
          sustainability: 10,
        },
        theoreticalLink: "Nâng cao giá trị hàng hóa sức lao động, chuyển hóa lao động giản đơn thành lao động phức tạp tạo ra lượng giá trị gấp bội.",
      },
      {
        id: "AUTOMATION_FIRST",
        code: "2C",
        title: "Đẩy mạnh Tự động hóa & Nhà máy Thông minh",
        subtitle: "Ứng dụng Robot và AI vào dây chuyền sản xuất",
        description:
          "Trợ cấp tín dụng cho doanh nghiệp đầu tư dây chuyền tự động hóa, trung tâm dữ liệu và phần mềm tối ưu hóa chuỗi cung ứng.",
        tradeoffs: {
          upside: "Năng suất sản phẩm tăng vọt, giảm tỷ lệ lỗi, đáp ứng các tiêu chuẩn khắt khe nhất của thị trường xuất khẩu.",
          downside: "Nguy cơ 'nhân khẩu thừa tương đối' cục bộ — hàng vạn công nhân dây chuyền bị mất việc nếu không kịp chuyển đổi nghề.",
        },
        impacts: {
          domesticValueCapture: 10,
          techCapability: 20,
          employmentIncome: -15,
          economicAutonomy: 5,
          sustainability: 5,
        },
        theoreticalLink: "Cấu tạo hữu cơ tư bản (c/v) tăng vọt; sản xuất giá trị thặng dư tương đối tăng mạnh nhưng tạo sức ép lên thị trường việc làm.",
      },
    ],
  },
  {
    id: 3,
    title: "Vòng 3: Chiếm lĩnh Giá trị Toàn cầu",
    subtitle: "Xác định vị trí trên 'Đường cong nụ cười' (Smile Curve)",
    macroContext:
      "Thương mại thế giới áp đặt hàng rào tiêu chuẩn xanh, truy xuất nguồn gốc và bản quyền công nghệ chặt chẽ.",
    scenario:
      "Để nâng tầm quốc gia lên nhóm thu nhập cao, Việt Nam phải chọn phân khúc then chốt để tập trung nguồn lực quốc gia.",
    choices: [
      {
        id: "SCALE_MANUFACTURING",
        code: "3A",
        title: "Mở rộng Quy mô 'Đại công xưởng' Toàn cầu",
        subtitle: "Trở thành trung tâm lắp ráp quy mô khổng lồ",
        description:
          "Đầu tư cảng nước sâu, hạ tầng logistics xuyên biên giới, hình thành các siêu cụm công nghiệp đáp ứng đơn hàng tỷ USD.",
        tradeoffs: {
          upside: "Sản lượng xuất khẩu đạt kỷ lục thế giới, duy trì vị thế mắt xích không thể thay thế trong chuỗi cung ứng vật lý.",
          downside: "Biên lợi nhuận trên từng sản phẩm vẫn mỏng (đáy đường cong nụ cười), gánh nặng tài nguyên, điện năng và phát thải lớn.",
        },
        impacts: {
          domesticValueCapture: 5,
          techCapability: 5,
          employmentIncome: 10,
          economicAutonomy: -10,
          sustainability: -15,
        },
        theoreticalLink: "Nắm giữ công đoạn thâm dụng lao động sống; giá trị thặng dư được tạo ra nhiều nhưng phần lớn bị các khâu đầu-cuối chiếm lĩnh.",
      },
      {
        id: "OWN_TECHNOLOGY",
        code: "3B",
        title: "Làm chủ Công nghệ Lõi & Sở hữu Trí tuệ",
        subtitle: "Đầu nguồn đường cong nụ cười: Fabless & Thuật toán",
        description:
          "Thành lập liên minh quốc gia thiết kế chip chuyên dụng (Edge AI, IoT) và giữ quyền sở hữu bằng sáng chế (IP).",
        tradeoffs: {
          upside: "Chiếm lĩnh phần giá trị thặng dư siêu ngạch lớn nhất ở đầu nguồn; chủ động an ninh công nghệ quốc gia.",
          downside: "Thách thức cực lớn khi cạnh tranh trực diện với các tập đoàn độc quyền công nghệ quốc tế (IP & Patent wars).",
        },
        impacts: {
          domesticValueCapture: 25,
          techCapability: 25,
          employmentIncome: 5,
          economicAutonomy: 25,
          sustainability: 10,
        },
        theoreticalLink: "Tham gia vào cơ chế phân chia giá trị thặng dư ở vị trí độc quyền công nghệ; thu lợi nhuận độc quyền cao.",
      },
      {
        id: "BUILD_BRANDS",
        code: "3C",
        title: "Xây dựng Thương hiệu Toàn cầu & Kênh Phân phối",
        subtitle: "Cuối nguồn đường cong nụ cười: Marketing, Brand & Retail",
        description:
          "Hỗ trợ các doanh nghiệp đầu đàn xây dựng thương hiệu quốc tế 'Made in/by Vietnam', thiết lập mạng lưới phân phối trực tiếp ra thế giới.",
        tradeoffs: {
          upside: "Thu trọn biên lợi nhuận thương mại và quyền lực định giá trực tiếp với người tiêu dùng toàn cầu.",
          downside: "Chi phí marketing và xây dựng niềm tin thương hiệu toàn cầu vô cùng tốn kém và đối mặt rào cản văn hóa.",
        },
        impacts: {
          domesticValueCapture: 20,
          techCapability: 10,
          employmentIncome: 15,
          economicAutonomy: 15,
          sustainability: 5,
        },
        theoreticalLink: "Kiểm soát khâu lưu thông và hiện thực hóa giá trị hàng hóa; chuyển hóa giá trị thặng dư thành lợi nhuận thương nghiệp cao.",
      },
    ],
  },
];

