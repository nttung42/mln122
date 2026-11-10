import { ResearchDataPoint } from "@/types/content";

export const RESEARCH_DATA: Record<string, ResearchDataPoint> = {
  VN_ELECTRONICS_EXPORT_2026: {
    id: "VN_ELECTRONICS_EXPORT_2026",
    title: "Kim ngạch xuất khẩu điện tử, máy tính & điện thoại (10 tháng 2026)",
    value: 207.02,
    unit: "tỷ USD",
    year: 2026,
    geography: "Việt Nam",
    indicator: "Kim ngạch xuất khẩu nhóm hàng công nghệ cao",
    source: {
      name: "Tổng cục Thống kê (GSO) & Tổng cục Hải quan",
      url: "https://www.nso.gov.vn/",
      publicationYear: 2026,
    },
    methodologyNote: "Số liệu sơ bộ 10 tháng đầu năm 2026, chiếm khoảng 41,5% tổng kim ngạch xuất khẩu cả nước.",
    interpretation:
      "Việt Nam đã vươn lên thành một trong những quốc gia xuất khẩu phần cứng và thiết bị điện tử lớn nhất toàn cầu.",
    status: "verified",
  },

  VN_ELECTRONICS_IMPORT_2026: {
    id: "VN_ELECTRONICS_IMPORT_2026",
    title: "Kim ngạch nhập khẩu linh kiện điện tử đầu vào (10 tháng 2026)",
    value: 224.51,
    unit: "tỷ USD",
    year: 2026,
    geography: "Việt Nam",
    indicator: "Kim ngạch nhập khẩu linh kiện và phụ tùng điện tử",
    source: {
      name: "Tổng cục Thống kê (GSO) & Tổng cục Hải quan",
      url: "https://www.nso.gov.vn/",
      publicationYear: 2026,
    },
    methodologyNote: "Chi phí nhập khẩu linh kiện vượt kim ngạch xuất khẩu nhóm hàng, dẫn tới nhập siêu linh kiện khoảng 17,5 tỷ USD.",
    interpretation:
      "Phản ánh tỷ lệ phụ thuộc đầu vào ngoại nhập lớn; giá trị nội địa tạo ra chủ yếu tập trung ở khâu lắp ráp và kiểm thử.",
    status: "verified",
  },

  VN_FDI_EXPORT_SHARE_2024: {
    id: "VN_FDI_EXPORT_SHARE_2024",
    title: "Tỷ trọng khu vực FDI trong tổng kim ngạch xuất khẩu hàng hóa",
    value: 71.7,
    unit: "%",
    year: 2024,
    geography: "Việt Nam",
    indicator: "Tỷ trọng xuất khẩu theo thành phần kinh tế",
    source: {
      name: "Tổng cục Thống kê Việt Nam (GSO)",
      url: "https://www.nso.gov.vn/",
      publicationYear: 2025,
    },
    methodologyNote: "Số liệu thống kê xuất nhập khẩu hàng hóa năm 2024.",
    interpretation:
      "Khu vực có vốn đầu tư nước ngoài (FDI) chiếm ưu thế áp đảo trong cơ cấu xuất khẩu, trong khi khối doanh nghiệp nội địa chiếm 28,3%.",
    status: "verified",
  },

  VN_DVA_SHARE_OECD: {
    id: "VN_DVA_SHARE_OECD",
    title: "Tỷ lệ Giá trị Gia tăng Nội địa (DVA) trong Tổng Xuất khẩu",
    value: 52.4,
    unit: "%",
    year: 2022,
    geography: "Việt Nam",
    indicator: "Domestic Value Added in Gross Exports",
    source: {
      name: "OECD – Trade in Value Added (TiVA) 2025 Release",
      url: "https://www.oecd.org/en/topics/sub-issues/trade-in-value-added.html",
      datasetVersion: "TiVA 2025 (data up to 2022)",
    },
    methodologyNote: "OECD TiVA đo lường theo phương pháp bảng cân đối liên ngành quốc tế (ICIO).",
    interpretation:
      "Trong các ngành điện tử và thiết bị viễn thông, tỷ lệ DVA thấp hơn đáng kể so với mức bình quân chung của nền kinh tế (khoảng 20-30%).",
    status: "verified",
  },

  VN_DIGITAL_ECONOMY_2026: {
    id: "VN_DIGITAL_ECONOMY_2026",
    title: "Quy mô nền kinh tế số Việt Nam",
    value: 49.0,
    unit: "tỷ USD",
    year: 2026,
    geography: "Việt Nam",
    indicator: "Quy mô kinh tế số (GMV)",
    source: {
      name: "Báo cáo e-Conomy SEA (Google, Temasek, Bain & Company)",
      url: "https://economysea.withgoogle.com/",
      publicationYear: 2026,
    },
    methodologyNote: "Ước tính tốc độ tăng trưởng kép khoảng 20%/năm, nhóm tăng nhanh nhất Đông Nam Á.",
    interpretation:
      "Nền kinh tế số đang mở ra cơ hội lớn cho việc phát triển các dịch vụ giá trị cao và phần mềm thương mại hóa.",
    status: "verified",
  },
};

