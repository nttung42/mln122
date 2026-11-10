import { SupplyChainStage } from "@/types/content";

export const SUPPLY_CHAIN_STAGES: SupplyChainStage[] = [
  {
    id: "raw-materials",
    order: 1,
    title: "01. Khai thác Nguyên liệu Thô",
    subtitle: "Cobalt, Lithium, Đồng, Đất hiếm",
    economicActivity: "Khai khoáng, luyện kim, tinh chế quặng kim loại quý hiếm.",
    keyCapabilities: ["Khai thác tài nguyên", "Luyện kim cơ bản", "Vận tải quặng thô"],
    keyActors: ["Các công ty mỏ đa quốc gia", "Công nhân hầm mỏ địa phương"],
    geographies: ["CHDC Congo (Cobalt)", "Chile/Australia (Lithium)", "Trung Quốc (Đất hiếm)"],
    assetType: "tangible",
    governancePower: "low",
    valueShareEstimated: 3, // ~3%
    description:
      "Tài nguyên thiên nhiên và quặng thô được khai thác ở những nơi có trữ lượng dồi dào, thường chịu áp lực nặng nề về môi trường và an toàn lao động.",
    deepDive: {
      marxianPerspective:
        "Tư liệu lao động ban đầu, thuộc về bộ phận tư bản bất biến (c). Giá trị của quặng thô phản ánh hao phí lao động xã hội cần thiết để khai thác quặng khỏi lòng đất.",
      gvcPerspective:
        "Điểm khởi đầu của chuỗi cung ứng vật lý. Giá trị thặng dư tạo ra ở khâu này phần lớn bị các tập đoàn thu mua trung gian và tài phiệt khai khoáng chi phối.",
    },
  },
  {
    id: "components",
    order: 2,
    title: "02. Sản xuất Linh kiện Bán dẫn & Màn hình",
    subtitle: "SoC 3nm, RAM LPDDR5, Tấm nền OLED",
    economicActivity:
      "Chế tạo vi mạch tại các xưởng đúc bán dẫn (Fab), sản xuất cảm biến máy ảnh, module truyền thông 5G.",
    keyCapabilities: ["Quang khắc EUV", "Công nghệ vật liệu cao cấp", "Tự động hóa phòng sạch"],
    keyActors: ["TSMC (Đài Loan)", "Samsung Electronics (Hàn Quốc)", "ASML (Hà Lan)", "Sony (Nhật Bản)"],
    geographies: ["Đài Loan", "Hàn Quốc", "Nhật Bản", "Hoa Kỳ"],
    assetType: "mixed",
    governancePower: "high",
    valueShareEstimated: 28, // ~28%
    description:
      "Yêu cầu trang thiết bị quang khắc đắt giá (hàng trăm triệu USD mỗi máy) và đội ngũ kỹ sư vi mạch hàng đầu thế giới.",
    deepDive: {
      marxianPerspective:
        "Cấu tạo hữu cơ của tư bản (c/v) cực kỳ cao. Khấu hao máy móc vi mạch khổng lồ được kết tinh vào giá trị linh kiện; lao động của kỹ sư là dạng 'lao động phức tạp' nhân bội giá trị.",
      gvcPerspective:
        "Nút thắt cổ chai địa chính trị và công nghệ của chuỗi cung ứng toàn cầu. Khâu này nắm giữ rào cản độc quyền tự nhiên cao.",
    },
  },
  {
    id: "design-rd",
    order: 3,
    title: "03. Nghiên cứu & Thiết kế Kiến trúc (R&D)",
    subtitle: "Kiến trúc ARM, Thuật toán AI, Thiết kế Hệ điều hành",
    economicActivity:
      "Nghiên cứu kiến trúc chip, thiết kế vi mạch không xưởng (Fabless), phát triển phần mềm hệ thống.",
    keyCapabilities: ["Sở hữu trí tuệ (IP)", "Thiết kế thuật toán", "Bằng sáng chế lõi"],
    keyActors: ["Apple (Hoa Kỳ)", "Nvidia (Hoa Kỳ)", "Qualcomm (Hoa Kỳ)", "ARM (Anh)"],
    geographies: ["Thung lũng Silicon (Mỹ)", "Cambridge (Anh)"],
    assetType: "intangible",
    governancePower: "high",
    valueShareEstimated: 32, // ~32%
    description:
      "Đỉnh cao đầu nguồn của 'Đường cong nụ cười'. Nơi tạo ra các giải pháp công nghệ mang tính bản quyền độc quyền.",
    deepDive: {
      marxianPerspective:
        "Lao động trí óc sáng tạo đỉnh cao (lao động phức tạp). Cho phép các tập đoàn thu lợi nhuận độc quyền cao và chiếm đoạt giá trị thặng dư siêu ngạch từ toàn thế giới.",
      gvcPerspective:
        "Khâu 'Lead Firm' (doanh nghiệp đầu đàn) trong GVC. Họ kiểm soát toàn bộ tiêu chuẩn thiết kế và quyền truy cập thị trường mà không cần sở hữu nhà xưởng gia công.",
    },
  },
  {
    id: "assembly",
    order: 4,
    title: "04. Lắp ráp & Kiểm định Cuối cùng",
    subtitle: "Lắp ghép hoàn thiện, Đóng gói, QC xuất xưởng",
    economicActivity:
      "Tập hợp hàng trăm linh kiện, hàn gắn bo mạch, kiểm tra độ bền, đóng gói hộp thành phẩm.",
    keyCapabilities: ["Kỷ luật dây chuyền", "Logistics cảng biển", "Năng suất lao động"],
    keyActors: ["Foxconn, Luxshare, Pegatron", "Công nhân nhà máy Việt Nam, Trung Quốc, Ấn Độ"],
    geographies: ["Việt Nam (Bắc Ninh, Thái Nguyên)", "Trung Quốc (Trịnh Châu)", "Ấn Độ"],
    assetType: "tangible",
    governancePower: "low",
    valueShareEstimated: 4, // ~4%
    description:
      "Đáy của 'Đường cong nụ cười'. Nơi sản phẩm được dán nhãn 'Made in Vietnam' và xuất khẩu với kim ngạch khổng lồ.",
    deepDive: {
      marxianPerspective:
        "Nơi lao động sống (v) trực tiếp tạo ra sản phẩm hiện vật. Tuy nhiên, tiền công công nhân chủ yếu phản ánh giá trị tư liệu sinh hoạt tối thiểu, trong khi thặng dư (m) chảy về công ty đặt hàng.",
      gvcPerspective:
        "Gia công theo hợp đồng (OEM/EMS). Biên lợi nhuận ròng của các nhà máy gia công chỉ từ 2-4%, chịu áp lực cạnh tranh gay gắt từ các nước có nhân công rẻ hơn.",
    },
  },
  {
    id: "branding",
    order: 5,
    title: "05. Thương hiệu & Hệ sinh thái Phần mềm",
    subtitle: "Định vị thương hiệu, Dịch vụ Cloud, Bản quyền OS",
    economicActivity:
      "Xây dựng giá trị vô hình của thương hiệu, dịch vụ số kèm theo (iCloud, App Store, Google Play).",
    keyCapabilities: ["Chiến lược Brand", "Hệ sinh thái khép kín", "Mạng lưới nhà phát triển"],
    keyActors: ["Apple", "Samsung", "Google"],
    geographies: ["Cupertino (Mỹ)", "Seoul (Hàn Quốc)"],
    assetType: "intangible",
    governancePower: "high",
    valueShareEstimated: 21, // ~21%
    description:
      "Biến một thiết bị phần cứng thành biểu tượng phong cách sống và cổng vào các dịch vụ phần mềm thu phí định kỳ.",
    deepDive: {
      marxianPerspective:
        "Hình thức chiếm đoạt giá trị thặng dư thông qua độc quyền thương hiệu và sự sùng bái hàng hóa (commodity fetishism).",
      gvcPerspective:
        "Chiếm đỉnh cuối nguồn của 'Đường cong nụ cười'. Thương hiệu quyết định mức giá bán lẻ (Retail Price) mà người tiêu dùng sẵn sàng trả.",
    },
  },
  {
    id: "distribution",
    order: 6,
    title: "06. Logistics & Mạng lưới Bán lẻ Toàn cầu",
    subtitle: "Vận chuyển hàng không quốc tế, Chuỗi Flagship Store",
    economicActivity:
      "Vận chuyển đường hàng không từ sân bay Nội Bài ra thế giới, hệ thống cửa hàng trải nghiệm bán lẻ.",
    keyCapabilities: ["Hệ thống logistics toàn cầu", "Mặt bằng thương mại đắc địa", "Dịch vụ khách hàng"],
    keyActors: ["Chuỗi Apple Store, Best Buy", "Hãng hàng không vận tải, Nhà mạng viễn thông"],
    geographies: ["Toàn cầu (Bắc Mỹ, Châu Âu, Châu Á)"],
    assetType: "mixed",
    governancePower: "medium",
    valueShareEstimated: 12, // ~12%
    description:
      "Đưa sản phẩm đến tay người dùng cuối, hoàn tất vòng chu chuyển của tư bản hàng hóa thành tư bản tiền tệ ($H' \to T'$).",
    deepDive: {
      marxianPerspective:
        "Chi phí lưu thông thuần túy và tư bản thương nghiệp. Khâu hiện thực hóa giá trị hàng hóa và chia sẻ một phần giá trị thặng dư của tư bản công nghiệp.",
      gvcPerspective:
        "Kiểm soát kênh phân phối trực tiếp giúp thương hiệu duy trì lòng trung thành của người tiêu dùng và phản hồi thị trường tức thì.",
    },
  },
];

