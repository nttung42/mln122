export interface FloorStat {
  label: string;
  val: string;
  color?: "green" | "electric" | "gold" | "danger" | "muted";
}

export interface FloorExhibit {
  id: string;
  tag: string;
  title: string;
  desc: string;
  thought: string;
  x: number;
  stats?: FloorStat[];
  badgeVariant?: "gold" | "green" | "electric" | "danger" | "muted";
  interactiveType?: "compare" | "day-bar" | "margin-matrix" | "decision-preview";
}

export interface FloorLevelData {
  id: number;
  levelTag: string;
  title: string;
  subtitle: string;
  gateX: number;
  exhibits: FloorExhibit[];
  doorTargetName: string;
}

export const FLOORS_DATA: FloorLevelData[] = [
  // FLOOR 1: THE PARADOX
  {
    id: 1,
    levelTag: "TẦNG 01",
    title: "Nghịch Lý Xuất Siêu Điện Tử",
    subtitle: "Xuất khẩu hàng trăm tỷ USD nhưng phần thặng dư thực tế giữ lại là bao nhiêu?",
    gateX: 2240,
    doorTargetName: "TẦNG 02: BÓC TÁCH SMARTPHONE",
    exhibits: [
      {
        id: "f1-e1",
        tag: "TRẠM 01 • ĐẠI CÔNG XƯỞNG TOÀN CẦU",
        title: "Kỷ Lục Xuất Khẩu 200 Tỷ USD",
        desc: "Cứ 5 chiếc điện thoại thông minh xuất khẩu trên toàn cầu thì có 1 chiếc lắp ráp tại Việt Nam. Ngành điện tử đóng góp hơn 41,5% tổng kim ngạch xuất khẩu cả nước.",
        thought: "200 tỷ USD xuất khẩu... Một con số khổng lồ nhưng giá trị nội địa là bao nhiêu?",
        x: 120,
        badgeVariant: "green",
        interactiveType: "compare",
        stats: [
          { label: "Kim ngạch xuất khẩu điện tử 2026", val: "$200.3B", color: "green" },
          { label: "Tỷ trọng trong toàn bộ xuất khẩu VN", val: "41.5%", color: "electric" },
        ],
      },
      {
        id: "f1-e2",
        tag: "TRẠM 02 • MẢNG TỐI NHẬP SIÊU",
        title: "Cơn Khát Vi Mạch Bán Dẫn",
        desc: "Muốn xuất khẩu 200 tỷ USD, Việt Nam phải nhập tới 182,8 tỷ USD linh kiện tinh vi. Toàn bộ vi xử lý và bản quyền thuật toán cốt lõi đều nằm ở nước ngoài.",
        thought: "Nhập khẩu linh kiện lên tới 182,8 tỷ USD! Chúng ta đang phụ thuộc công nghệ nguồn.",
        x: 820,
        badgeVariant: "danger",
        interactiveType: "compare",
        stats: [
          { label: "Nhập khẩu linh kiện bán dẫn", val: "$182.8B", color: "danger" },
          { label: "Nhập siêu ròng linh kiện", val: "-$17.5B", color: "gold" },
        ],
      },
      {
        id: "f1-e3",
        tag: "TRẠM 03 • ĐÁY ĐƯỜNG CONG NỤ CƯỜI",
        title: "Biên Lợi Nhuận Gia Công Cực Mỏng",
        desc: "Trên mỗi chiếc điện thoại 1.000 USD, chi phí nhân công lắp ráp chỉ nhận về 20–35 USD. Lợi nhuận khổng lồ rơi vào tay bên nắm bằng sáng chế và thương hiệu.",
        thought: "Biên lợi nhuận lắp ráp chỉ 3.5%, trong khi R&D và thiết kế chip chiếm tới 48%!",
        x: 1520,
        badgeVariant: "gold",
        interactiveType: "compare",
        stats: [
          { label: "Biên lợi nhuận gia công lắp ráp", val: "2 - 3.5%", color: "danger" },
          { label: "Biên lợi nhuận của R&D & Thiết kế IP", val: "45 - 52%", color: "gold" },
        ],
      },
    ],
  },

  // FLOOR 2: FOLLOW THE PRODUCT
  {
    id: 2,
    levelTag: "TẦNG 02",
    title: "Bóc Tách Chuỗi Giá Trị Smartphone",
    subtitle: "Một sản phẩm công nghệ đi qua bao nhiêu bàn tay trước khi lên kệ?",
    gateX: 2240,
    doorTargetName: "TẦNG 03: GIẢI MÃ TƯ BẢN c + v + m",
    exhibits: [
      {
        id: "f2-e1",
        tag: "TRẠM 01 • NGUỒN NGUYÊN LIỆU THÔ",
        title: "Khai Thác Khoáng Sản & Đất Hiếm",
        desc: "Cobalt từ Congo, Lithium từ Chile, Nhôm và Đồng tinh chế. Giá trị thô ở đầu nguồn chiếm dưới 1% giá bán lẻ dù lao động khai khoáng vô cùng khắc nghiệt.",
        thought: "Khoáng sản đất hiếm là mồ hôi nước mắt, nhưng giá trị gia tăng ở đây rất thấp.",
        x: 120,
        badgeVariant: "muted",
        stats: [
          { label: "Tỷ trọng giá trị thô", val: "< 1.5%", color: "muted" },
          { label: "Địa bàn khai thác chính", val: "Châu Phi & Nam Mỹ", color: "electric" },
        ],
      },
      {
        id: "f2-e2",
        tag: "TRẠM 02 • ĐẦU NÃO R&D & BÁN DẪN",
        title: "Bản Quyền IP & Thuật Toán AI",
        desc: "Thiết kế kiến trúc ARM tại Anh, sản xuất quang khắc tại Đài Loan, thiết kế vi xử lý tại Mỹ. Quyền lực độc quyền công nghệ quyết định giá bán của cả chuỗi.",
        thought: "Đây chính là nơi giá trị thặng dư siêu ngạch tập trung dày đặc nhất!",
        x: 820,
        badgeVariant: "gold",
        stats: [
          { label: "Chi phí bản quyền & R&D", val: "$340 / máy", color: "gold" },
          { label: "Quyền chi phối chuỗi", val: "Độc quyền nhóm", color: "electric" },
        ],
      },
      {
        id: "f2-e3",
        tag: "TRẠM 03 • LẮP RÁP TẠI VIỆT NAM",
        title: "Hàng Trăm Ngàn Bàn Tay Công Nhân",
        desc: "Việt Nam kết nối mọi linh kiện thành sản phẩm hoàn chỉnh trong phòng sạch tiêu chuẩn quốc tế. Nhưng giá trị tạo ra phần lớn chuyển ngược về tập đoàn mẹ.",
        thought: "Công nhân làm việc cật lực trong phòng sạch, nhưng giá trị giữ lại tại chỗ quá ít.",
        x: 1520,
        badgeVariant: "electric",
        stats: [
          { label: "Giá trị công đoạn lắp ráp", val: "$28 / máy", color: "danger" },
          { label: "Lực lượng lao động", val: "> 400.000 người", color: "green" },
        ],
      },
    ],
  },

  // FLOOR 3: DECODE THE VALUE
  {
    id: 3,
    levelTag: "TẦNG 03",
    title: "Giải Mã Bản Chất Giá Trị & Thặng Dư",
    subtitle: "Máy móc (c) không tự sinh ra giá trị mới — Chỉ có Sức lao động sống (v) mới tạo ra Thặng dư (m).",
    gateX: 2240,
    doorTargetName: "TẦNG 04: DÒNG CHẢY TOÀN CẦU",
    exhibits: [
      {
        id: "f3-e1",
        tag: "TRẠM 01 • TƯ BẢN BẤT BIẾN (c)",
        title: "Máy Móc Tĩnh: Cỗ Máy Vô Hồn",
        desc: "Robot tự động, máy dập và nhà xưởng chỉ dịch chuyển dần giá trị khấu hao vào sản phẩm mới. Bản thân chúng không tự tăng thêm một đồng giá trị nào.",
        thought: "Máy móc tối tân đến đâu cũng chỉ chuyển giá trị cũ, không tự sinh ra giá trị mới!",
        x: 120,
        badgeVariant: "electric",
        stats: [
          { label: "Tính chất của c", val: "Khấu hao nguyên vẹn", color: "electric" },
          { label: "Độ tăng giá trị", val: "ΔW = 0", color: "muted" },
        ],
      },
      {
        id: "f3-e2",
        tag: "TRẠM 02 • SỨC LAO ĐỘNG SỐNG (v + m)",
        title: "Nguồn Gốc Của Mọi Lợi Nhuận",
        desc: "Trong ca làm việc 8 tiếng: 4 giờ đầu công nhân làm để hoàn lại tiền lương (v). 4 giờ sau là lao động thặng dư (m) chảy về túi chủ sở hữu tư bản.",
        thought: "4 giờ làm việc không công mỗi ngày... Đó chính là bản chất của giá trị thặng dư!",
        x: 820,
        badgeVariant: "gold",
        interactiveType: "day-bar",
        stats: [
          { label: "Lương công nhân (v)", val: "4 Giờ / ca", color: "electric" },
          { label: "Thời gian thặng dư (m)", val: "4 Giờ / ca", color: "gold" },
        ],
      },
      {
        id: "f3-e3",
        tag: "TRẠM 03 • LỐI THOÁT CHO VIỆT NAM",
        title: "Thặng Dư Tương Đối & Tự Chủ Công Nghệ",
        desc: "Tăng ca chỉ là thặng dư tuyệt đối có giới hạn thể xác. Để đất nước bứt phá, con đường duy nhất là làm chủ thiết kế, phần mềm và đổi mới sáng tạo.",
        thought: "Muốn thoát bẫy gia công, Việt Nam phải nhảy sang làm chủ thiết kế và sở hữu trí tuệ!",
        x: 1520,
        badgeVariant: "green",
        stats: [
          { label: "Mục tiêu giá trị nội địa", val: "> 40%", color: "green" },
          { label: "Mô hình tăng trưởng", val: "Đổi mới sáng tạo", color: "gold" },
        ],
      },
    ],
  },

  // FLOOR 4: THE GLOBAL SHIFT
  {
    id: 4,
    levelTag: "TẦNG 04",
    title: "Dòng Chảy Chuỗi Giá Trị Toàn Cầu",
    subtitle: "Quyền lực thị trường phân chia lại thặng dư giữa các quốc gia như thế nào?",
    gateX: 2240,
    doorTargetName: "TẦNG 05: VỊ THẾ VIỆT NAM",
    exhibits: [
      {
        id: "f4-e1",
        tag: "TRẠM 01 • ĐƯỜNG CONG NỤ CƯỜI (SMILING CURVE)",
        title: "Phân Cực Hai Đầu Thượng - Hạ Nguồn",
        desc: "Khâu thượng nguồn (R&D, thiết kế chip, IP) và hạ nguồn (thương hiệu, phân phối độc quyền) hút trọn thặng dư. Khâu sản xuất ở đáy chịu cạnh tranh khốc liệt.",
        thought: "Đường cong nụ cười chỉ rõ: Càng ở đáy gia công, biên lợi nhuận càng teo tóp!",
        x: 120,
        badgeVariant: "gold",
        stats: [
          { label: "Thượng nguồn (R&D)", val: "~ 40% giá trị", color: "gold" },
          { label: "Hạ nguồn (Thương hiệu)", val: "~ 45% giá trị", color: "electric" },
        ],
      },
      {
        id: "f4-e2",
        tag: "TRẠM 02 • QUYỀN LỰC TƯ BẢN ĐỘC QUYỀN",
        title: "Bẫy Phụ Thuộc Vào Tập Đoàn Đa Quốc Gia",
        desc: "Các tập đoàn mẹ kiểm soát dòng tiền, đơn đặt hàng và tiêu chuẩn kỹ thuật. Doanh nghiệp gia công địa phương không có quyền định giá sản phẩm.",
        thought: "Ai nắm công nghệ và thương hiệu, người đó định đoạt luật chơi toàn cầu.",
        x: 820,
        badgeVariant: "danger",
        stats: [
          { label: "Quyền định giá", val: "Thuộc tập đoàn mẹ", color: "danger" },
          { label: "Rủi ro dịch chuyển vốn", val: "Rất cao", color: "gold" },
        ],
      },
      {
        id: "f4-e3",
        tag: "TRẠM 03 • TÁI CẤU TRÚC CHUỖI TOÀN CẦU",
        title: "Xu Hướng China+1 & Dịch Chuyển Nhà Máy",
        desc: "Chiến tranh thương mại và căng thẳng địa chính trị đẩy dòng vốn dịch chuyển sang Đông Nam Á. Việt Nam là điểm đến hấp dẫn nhưng phải tránh bẫy gia công cấp thấp.",
        thought: "Cơ hội vàng đang mở ra, nhưng chỉ nhận lắp ráp thì không thể bứt phá!",
        x: 1520,
        badgeVariant: "green",
        stats: [
          { label: "Dòng vốn FDI dịch chuyển", val: "Hàng chục tỷ USD", color: "green" },
          { label: "Yêu cầu cấp bách", val: "Nâng tỷ lệ nội địa", color: "electric" },
        ],
      },
    ],
  },

  // FLOOR 5: VIETNAM'S POSITION
  {
    id: 5,
    levelTag: "TẦNG 05",
    title: "Vị Thế Kinh Tế Việt Nam: Điểm Nghẽn & Cơ Hội",
    subtitle: "Khối FDI chiếm 73% xuất khẩu — Doanh nghiệp nội địa đang đứng ở đâu?",
    gateX: 2240,
    doorTargetName: "TẦNG 06: BÀN CỜ ĐIỀU HÀNH 2040",
    exhibits: [
      {
        id: "f5-e1",
        tag: "TRẠM 01 • SỰ ÁP ĐẢO CỦA KHỐI FDI",
        title: "73% Xuất Khẩu Nằm Trong Tay Ngoại Lực",
        desc: "Khu vực có vốn đầu tư nước ngoài tạo ra 73% kim ngạch xuất khẩu và hơn 50% sản lượng công nghiệp. Nhưng liên kết giữa FDI và doanh nghiệp nội địa còn rất yếu.",
        thought: "Xuất khẩu cao kỷ lục nhưng 73% là của doanh nghiệp FDI!",
        x: 120,
        badgeVariant: "gold",
        stats: [
          { label: "Tỷ trọng xuất khẩu FDI", val: "73%", color: "gold" },
          { label: "Liên kết DN nội địa", val: "Chủ yếu Tier 2/3", color: "danger" },
        ],
      },
      {
        id: "f5-e2",
        tag: "TRẠM 02 • ĐIỂM NGHẼN TỶ LỆ NỘI ĐỊA HÓA",
        title: "Phần Lớn Cung Ứng Chỉ Là Bao Bì & Vỏ Hộp",
        desc: "Doanh nghiệp Việt Nam tham gia chuỗi điện tử chủ yếu ở khâu in ấn, bao bì, ép nhựa và cơ khí đơn giản. Phần linh kiện lõi bán dẫn gần như vắng bóng.",
        thought: "Chúng ta chỉ làm bao bì, ốc vít... Linh kiện lõi vẫn phải nhập khẩu 100%.",
        x: 820,
        badgeVariant: "danger",
        stats: [
          { label: "Tỷ lệ nội địa hóa điện tử", val: "Dưới 20%", color: "danger" },
          { label: "Hàm lượng công nghệ cao", val: "Cực thấp", color: "muted" },
        ],
      },
      {
        id: "f5-e3",
        tag: "TRẠM 03 • MỤC TIÊU CHIẾN LƯỢC 2040",
        title: "Tự Chủ Công Nghệ & Nâng Tầm Năng Suất",
        desc: "Chiến lược quốc gia đến năm 2040 đặt trọng tâm vào đào tạo 50.000 kỹ sư bán dẫn, làm chủ phần mềm nhúng và xây dựng các thương hiệu công nghệ Make in Vietnam.",
        thought: "Mục tiêu 2040: 50.000 kỹ sư bán dẫn và nâng tỷ lệ giữ lại thặng dư nội địa!",
        x: 1520,
        badgeVariant: "green",
        stats: [
          { label: "Mục tiêu kỹ sư bán dẫn", val: "50.000 kỹ sư", color: "green" },
          { label: "DVC giữ lại nội địa", val: "Mục tiêu > 50%", color: "electric" },
        ],
      },
    ],
  },

  // FLOOR 6: VIETNAM 2040 (GAME CHALLENGE)
  {
    id: 6,
    levelTag: "TẦNG 06",
    title: "Bàn Cờ Chiến Lược Vietnam 2040",
    subtitle: "Nhập vai Người chèo lái kinh tế: Đối mặt với 3 quyết định then chốt.",
    gateX: 2240,
    doorTargetName: "TẦNG 07: BÁO CÁO PHÁN QUYẾT",
    exhibits: [
      {
        id: "f6-e1",
        tag: "QUYẾT ĐỊNH 01 • ĐỘNG LỰC TĂNG TRƯỞNG",
        title: "Lựa Chọn Mô Hình Phát Triển",
        desc: "Ưu tiên hút vốn FDI bằng mọi giá, hay bắt buộc liên kết chuyển giao công nghệ với doanh nghiệp nội địa, hay rót vốn nhà nước phát triển công nghệ nguồn?",
        thought: "Mỗi quyết định đều có đánh đổi: Hút FDI nhanh việc làm nhưng thặng dư chảy ra ngoài!",
        x: 120,
        badgeVariant: "gold",
        stats: [
          { label: "Lựa chọn 1A", val: "FDI First (Gia công)", color: "gold" },
          { label: "Lựa chọn 1B", val: "Domestic Linkage (Liên kết)", color: "green" },
        ],
      },
      {
        id: "f6-e2",
        tag: "QUYẾT ĐỊNH 02 • ĐẦU TƯ BÁN DẪN & NHÂN LỰC",
        title: "Chiến Lược Chip & Nhân Tài Quốc Gia",
        desc: "Đầu tư hàng tỷ USD xây nhà máy đúc chip (Fab) đầy rủi ro, hay tập trung vào Thiết kế vi mạch (Fabless) và đóng gói tiên tiến (ATP) phù hợp năng lực?",
        thought: "Fabless ít tốn vốn hơn nhưng đòi hỏi nhân lực chất lượng cao vượt bậc.",
        x: 820,
        badgeVariant: "electric",
        stats: [
          { label: "Lựa chọn 2A", val: "Fabless & Design (Thiết kế)", color: "electric" },
          { label: "Lựa chọn 2B", val: "Foundry Fab (Đúc chip)", color: "danger" },
        ],
      },
      {
        id: "f6-e3",
        tag: "QUYẾT ĐỊNH 03 • NÂNG TẦM QUYỀN LỢI NGƯỜI LAO ĐỘNG",
        title: "Giải Phóng Giá Trị Sức Lao Động (v)",
        desc: "Tăng lương tối thiểu và bảo vệ phúc lợi công nhân, hay tiếp tục duy trì nhân công giá rẻ để cạnh tranh hút vốn với các nước lân cận?",
        thought: "Nhân công giá rẻ không còn là lợi thế bền vững. Phải tăng giá trị sức lao động!",
        x: 1520,
        badgeVariant: "green",
        stats: [
          { label: "Tăng lương & Kỹ năng", val: "+ Lương, + Năng suất", color: "green" },
          { label: "Đánh đổi", val: "Áp lực chi phí ngắn hạn", color: "gold" },
        ],
      },
    ],
  },

  // FLOOR 7: THE VERDICT
  {
    id: 7,
    levelTag: "TẦNG 07",
    title: "Phán Quyết & Hồ Sơ Chiến Lược",
    subtitle: "Định hình vị thế Việt Nam trong kỷ nguyên chuỗi giá trị mới.",
    gateX: 2240,
    doorTargetName: "HOÀN THÀNH HÀNH TRÌNH",
    exhibits: [
      {
        id: "f7-e1",
        tag: "KẾT QUẢ 01 • CHỈ SỐ GIÁ TRỊ GIỮ LẠI (DVC)",
        title: "Tự Chủ Kinh Tế & Tỷ Suất Thặng Dư Nội Địa",
        desc: "Việt Nam nâng được tỷ lệ giữ lại giá trị từ mức 3% đáy chuỗi lên trên 45%. Doanh nghiệp nội địa làm chủ các mắt xích cung ứng công nghệ quan trọng.",
        thought: "Chúng ta đã giải mã được dòng chảy thặng dư và vươn lên làm chủ chuỗi!",
        x: 120,
        badgeVariant: "green",
        stats: [
          { label: "Chỉ số DVC đạt được", val: "68 / 100", color: "green" },
          { label: "Tự chủ công nghệ (TC)", val: "62 / 100", color: "electric" },
        ],
      },
      {
        id: "f7-e2",
        tag: "KẾT QUẢ 02 • BÀI HỌC KINH TẾ CHÍNH TRỊ MÁC - LÊNIN",
        title: "Thấu Hiểu Bản Chất Để Hành Động",
        desc: "Sự giàu có thực sự của một quốc gia không nằm ở kim ngạch xuất khẩu danh nghĩa, mà nằm ở phần thặng dư được giữ lại và tái đầu tư cho nhân dân và tri thức.",
        thought: "Giá trị thặng dư là kết tinh của trí tuệ và lao động con người. Không có phép màu từ máy móc!",
        x: 820,
        badgeVariant: "gold",
        stats: [
          { label: "Bản chất giá trị", val: "Lao động kết tinh", color: "gold" },
          { label: "Chìa khóa bứt phá", val: "Thặng dư tương đối", color: "electric" },
        ],
      },
      {
        id: "f7-e3",
        tag: "THÔNG ĐIỆP KHÉP LẠI • THE VALUE SHIFT",
        title: "Follow the value. Understand the shift. Shape Vietnam's future.",
        desc: "Hành trình khép lại nhưng tư duy phản biện kinh tế mở ra. Bạn đã hoàn thành trọn vẹn 7 tầng trải nghiệm của The Value Shift.",
        thought: "Chúc mừng bạn đã hoàn thành trọn vẹn hành trình 7 tầng của The Value Shift!",
        x: 1520,
        badgeVariant: "electric",
        stats: [
          { label: "Tổng số tầng hoàn thành", val: "7 / 7 Tầng", color: "green" },
          { label: "Trạng thái", val: "Xuất Sắc", color: "gold" },
        ],
      },
    ],
  },
];
