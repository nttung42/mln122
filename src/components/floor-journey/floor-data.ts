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
  // FLOOR 1: THE PARADOX (Open Wall Exhibition)
  {
    id: 1,
    levelTag: "TẦNG 01",
    title: "Nghịch Lý Xuất Siêu Điện Tử",
    subtitle: "Xuất khẩu hàng trăm tỷ USD nhưng phần thặng dư thực tế giữ lại là bao nhiêu?",
    gateX: 3850,
    doorTargetName: "TẦNG 02: BÓC TÁCH SMARTPHONE",
    exhibits: [
      {
        id: "f1-e1",
        tag: "TRẠM 01 • ĐẠI CÔNG XƯỞNG TOÀN CẦU",
        title: "Kỷ Lục Xuất Khẩu 200 Tỷ USD",
        desc: "Cứ 5 chiếc điện thoại thông minh xuất khẩu trên toàn cầu thì có 1 chiếc lắp ráp tại Việt Nam. Ngành điện tử đóng góp hơn 41,5% tổng kim ngạch xuất khẩu cả nước.",
        thought: "200 tỷ USD xuất khẩu... Một con số khổng lồ nhưng giá trị nội địa thực tế là bao nhiêu?",
        x: 500,
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
        thought: "Nhập tới 182,8 tỷ USD linh kiện? Sợi dây cáp đỏ đang hút ngược tiền về nước ngoài!",
        x: 1850,
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
        thought: "1.000 USD chiếc máy mà mình chỉ nhận về 28 USD tiền công ở đáy đường cong Oxy!",
        x: 3100,
        badgeVariant: "gold",
        interactiveType: "compare",
        stats: [
          { label: "Biên lợi nhuận gia công lắp ráp", val: "2 - 3.5%", color: "danger" },
          { label: "Biên lợi nhuận của R&D & Thiết kế IP", val: "45 - 52%", color: "gold" },
        ],
      },
    ],
  },

  // FLOOR 2: FOLLOW THE PRODUCT (Bóc tách phần cứng & Phân tầng giá trị)
  {
    id: 2,
    levelTag: "TẦNG 02",
    title: "Bóc Tách Chuỗi Giá Trị Smartphone",
    subtitle: "Một sản phẩm công nghệ đi qua bao nhiêu bàn tay trước khi lên kệ?",
    gateX: 3520,
    doorTargetName: "TẦNG 03: GIẢI MÃ TƯ BẢN c + v + m",
    exhibits: [
      {
        id: "f2-e1",
        tag: "TRẠM 01 • LỚP ĐÁY (ĐỘ CAO: DƯỚI THẤP)",
        title: "Khai Thác Khoáng Sản & Pin Thô",
        desc: "Cobalt từ Congo, Lithium từ Chile. Giá trị thô ở đầu nguồn chiếm dưới 2% giá bán lẻ dù lao động khai khoáng vô cùng khắc nghiệt.",
        thought: "Trạm ở DƯỚI THẤP, MÀU XÁM: Khoáng sản thô chỉ chiếm < 2% giá trị!",
        x: 430,
        badgeVariant: "muted",
        stats: [
          { label: "Tỷ trọng giá trị thô", val: "< 2.0%", color: "muted" },
          { label: "Giá trị / máy", val: "$15 - $20", color: "muted" },
        ],
      },
      {
        id: "f2-e2",
        tag: "TRẠM 02 • ĐẦU NÃO R&D & BÁN DẪN (ĐỘ CAO: TRÊN CAO)",
        title: "Bản Quyền IP & Chip 3nm TSMC",
        desc: "Thiết kế kiến trúc ARM, đúc chip TSMC tại Đài Loan, thiết kế chip tại Thung lũng Silicon. Quyền lực độc quyền công nghệ nắm giữ phần lớn thặng dư.",
        thought: "Trạm ở TRÊN CAO, XANH LÁ: Đầu não R&D & Chip 3nm thu trọn ~60% giá trị ($340/máy)!",
        x: 1230,
        badgeVariant: "green",
        stats: [
          { label: "Chi phí bản quyền & R&D", val: "$340 / máy", color: "green" },
          { label: "Tỷ trọng giá trị", val: "~60.0%", color: "green" },
        ],
      },
      {
        id: "f2-e3",
        tag: "TRẠM 03 • LẮP RÁP TẠI VIỆT NAM (ĐỘ CAO: DƯỚI THẤP)",
        title: "Gia Công Hoàn Thiện Tại Việt Nam",
        desc: "Hơn 400.000 công nhân làm việc kỷ luật trong phòng sạch khắt khe nhưng biên lợi nhuận gia công chỉ 2-3.5%, nhận về 20-28 USD/máy.",
        thought: "Trạm ở DƯỚI THẤP, MÀU XÁM: Hơn 400.000 công nhân VN phòng sạch nhưng nhận về chỉ ~4% ($20-28)!",
        x: 2055,
        badgeVariant: "muted",
        stats: [
          { label: "Công lắp ráp / máy", val: "$20 - $28", color: "muted" },
          { label: "Tỷ trọng giá trị", val: "~4.0%", color: "muted" },
        ],
      },
      {
        id: "f2-e4",
        tag: "TRẠM 04 • THƯƠNG HIỆU & HỆ ĐIỀU HÀNH (ĐỘ CAO: TRÊN CAO)",
        title: "Hệ Sinh Thái OS & Nền Tảng Phân Phối",
        desc: "Doanh nghiệp đầu đàn (Lead Firms) kiểm soát nền tảng và phân phối toàn cầu, thu hồi toàn bộ thặng dư khi hàng hóa hóa thành tiền tệ.",
        thought: "Trạm ở TRÊN CAO, XANH LÁ: Thương hiệu & Hệ sinh thái OS thu trọn ~33% giá trị ($330/máy)!",
        x: 2870,
        badgeVariant: "green",
        stats: [
          { label: "Thặng dư thương hiệu", val: "$330 / máy", color: "green" },
          { label: "Tỷ trọng giá trị", val: "~33.0%", color: "green" },
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
    gateX: 4460,
    doorTargetName: "TẦNG 04: DÒNG CHẢY TOÀN CẦU",
    exhibits: [
      {
        id: "f3-e1",
        tag: "TRẠM 01 • HAI THUỘC TÍNH & HÀNG HÓA ĐẶC BIỆT",
        title: "Hàng Hóa & Bí Mật Sức Lao Động",
        desc: "Sức lao động là hàng hóa duy nhất khi tiêu dùng lại sáng tạo ra lượng giá trị mới (v + m) lớn hơn chính bản thân nó.",
        thought: "Sức lao động là hàng hóa kỳ diệu duy nhất có khả năng tạo ra giá trị mới lớn hơn chính nó!",
        x: 820,
        badgeVariant: "electric",
        stats: [
          { label: "Giá trị tạo ra (v + m)", val: "> v", color: "electric" },
          { label: "Thực thể của giá trị", val: "Lao động trừu tượng", color: "gold" },
        ],
      },
      {
        id: "f3-e2",
        tag: "TRẠM 02 • PHÂN RÃ CẤU THÀNH W = c + v + m",
        title: "Giải Phẫu Cơ Cấu Giá Trị Smartphone",
        desc: "Máy móc (c) chỉ chuyển dịch dần giá trị khấu hao (ΔW = 0). Chỉ có sức lao động sống (v) mới tái tạo và sinh ra thặng dư (m).",
        thought: "Máy móc tối tân đến đâu cũng chỉ chuyển giá trị cũ (ΔW = 0). Chỉ có sức lao động sống mới đẻ ra thặng dư (m)!",
        x: 1940,
        badgeVariant: "electric",
        stats: [
          { label: "Tư bản bất biến (c)", val: "$650 (65%)", color: "electric" },
          { label: "Giá trị mới (v + m)", val: "$350 (35%)", color: "green" },
        ],
      },
      {
        id: "f3-e3",
        tag: "TRẠM 03 • PHÒNG THÍ NGHIỆM NGÀY LAO ĐỘNG",
        title: "The Working Day Simulator & Tỷ Suất m'",
        desc: "Mô phỏng ngày lao động: Thời gian tất yếu (v) bù đắp lương và thời gian thặng dư (m) tạo lợi nhuận cho chủ tư bản.",
        thought: "Hãy thử kéo thanh trượt Simulator! Xem tỷ suất m' vọt tăng khi rút ngắn thời gian tất yếu bằng công nghệ!",
        x: 3140,
        badgeVariant: "gold",
        interactiveType: "day-bar",
        stats: [
          { label: "Thời gian tất yếu (v)", val: "4.0 Giờ / ca", color: "electric" },
          { label: "Tỷ suất thặng dư m'", val: "100% - 300%", color: "gold" },
        ],
      },
      {
        id: "f3-e4",
        tag: "TRẠM 04 • BÀI HỌC CHO VIỆT NAM",
        title: "Từ Thặng Dư Tuyệt Đối Sang Thặng Dư Tương Đối",
        desc: "Thoát khỏi bẫy gia công giá rẻ và tăng ca kíp để tiến lên làm chủ công nghệ bán dẫn, phần mềm và thương hiệu Make in Vietnam.",
        thought: "Việt Nam không thể mãi dựa vào thặng dư tuyệt đối (tăng ca, lương rẻ). Phải nhảy sang thặng dư tương đối bằng làm chủ công nghệ!",
        x: 4080,
        badgeVariant: "green",
        stats: [
          { label: "Mục tiêu giá trị nội địa", val: "DVA > 40%", color: "green" },
          { label: "Kỹ sư bán dẫn 2030", val: "50.000", color: "gold" },
        ],
      },
    ],
  },

  // FLOOR 4: THE GLOBAL SHIFT (Dòng Chảy Toàn Cầu & Quản Trị Chuỗi Giá Trị)
  {
    id: 4,
    levelTag: "TẦNG 04",
    title: "Dòng Chảy Chuỗi Giá Trị Toàn Cầu",
    subtitle: "Quyền lực thị trường phân chia lại thặng dư giữa các quốc gia như thế nào?",
    gateX: 4620,
    doorTargetName: "TẦNG 05: VỊ THẾ VIỆT NAM",
    exhibits: [
      {
        id: "f4-e1",
        tag: "TRẠM 01 • BẢN ĐỒ GVC TOÀN CẦU & 4 LỚP QUAN SÁT",
        title: "Phân Cực Địa Kinh Tế & Độc Quyền Thiết Bị",
        desc: "Bản đồ tương tác 4 lớp đối chiếu nơi bỏ ra sức lao động sản xuất và nơi thâu tóm thặng dư. Cỗ máy EUV 350 triệu USD của ASML và bằng sáng chế Silicon Valley chi phối toàn cầu.",
        thought: "Bản đồ GVC: Mỹ thâu tóm 45% thặng dư, Hà Lan độc quyền máy EUV, còn Việt Nam nhận về tỷ lệ mỏng manh!",
        x: 1120,
        badgeVariant: "electric",
        stats: [
          { label: "Mỹ & Hà Lan (R&D, Máy EUV)", val: "45% Thặng dư", color: "electric" },
          { label: "Đài Loan (Đúc chip 3nm)", val: "19% Giá trị", color: "gold" },
        ],
      },
      {
        id: "f4-e2",
        tag: "TRẠM 02 • MÔ HÌNH DÒNG TIỀN SANKEY $1,000",
        title: "1.000 USD Bán Lẻ Chảy Đi Về Đâu?",
        desc: "Bóc tách dòng tiền một chiếc điện thoại: 380 USD về R&D, 310 USD về Thương hiệu, 190 USD về đúc chip. Hơn 400.000 công nhân Việt Nam ở đáy chỉ nhận về 28 USD tiền công.",
        thought: "1.000 USD chiếc máy bán ra: 380 USD về R&D Mỹ, chỉ 28 USD về tay công nhân Việt Nam!",
        x: 2550,
        badgeVariant: "gold",
        stats: [
          { label: "Thượng + Hạ nguồn (Mỹ)", val: "$690 / máy", color: "electric" },
          { label: "Lắp ráp tại VN (v)", val: "$28 / máy (2.8%)", color: "danger" },
        ],
      },
      {
        id: "f4-e3",
        tag: "TRẠM 03 • ĐẤU TRƯỜNG QUYỀN LỰC GVC & LÀN SÓNG CHINA+1",
        title: "Bẫy Phụ Thuộc Captive & Cơ Hội Bứt Phá",
        desc: "Tập đoàn Lead Firms áp đặt chuẩn kỹ thuật đóng và bẫy gia công phụ thuộc. Làn sóng 'China + 1' mang dòng vốn FDI khổng lồ sang Việt Nam nhưng đòi hỏi chiến lược nâng cấp nội địa hóa khẩn cấp.",
        thought: "Bẫy Captive Network: Nếu chỉ cạnh tranh bằng nhân công giá rẻ, Việt Nam sẽ bị thay thế khi lương tăng!",
        x: 3770,
        badgeVariant: "green",
        stats: [
          { label: "Bẫy gia công", val: "Captive Network", color: "danger" },
          { label: "Lối thoát", val: "Nâng tỷ lệ nội địa & Fabless", color: "green" },
        ],
      },
    ],
  },

  // FLOOR 5: VIETNAM'S POSITION
  {
    id: 5,
    levelTag: "TẦNG 05",
    title: "Vị Thế Kinh Tế Việt Nam: Điểm Nghẽn & Cơ Hội",
    subtitle: "Khối FDI chiếm 71.7% xuất khẩu — Doanh nghiệp nội địa bứt phá ra sao?",
    gateX: 3980,
    doorTargetName: "TẦNG 06: BÀN CỜ ĐIỀU HÀNH 2040",
    exhibits: [
      {
        id: "f5-e1",
        tag: "TRẠM 01 • NGHỊCH LÝ KINH TẾ KÉP",
        title: "Kỷ Lục Xuất Khẩu $405.53B & Tỷ Trọng FDI 71.7%",
        desc: "Khu vực có vốn đầu tư nước ngoài tạo ra 71.7% kim ngạch xuất khẩu và hơn 50% sản lượng công nghiệp, tạo nên hiện tượng kinh tế kép.",
        thought: "Xuất khẩu 405.5 tỷ USD, nhưng hơn 71.7% kim ngạch thuộc về tập đoàn FDI. Khối nội địa cần làm gì để bắt kịp?",
        x: 640,
        badgeVariant: "gold",
        stats: [
          { label: "Xuất khẩu 2024", val: "$405.53B", color: "gold" },
          { label: "Tỷ trọng FDI", val: "71.7%", color: "danger" },
        ],
      },
      {
        id: "f5-e2",
        tag: "TRẠM 02 • ĐIỂM NGHẼN NỘI ĐỊA HÓA",
        title: "Bẫy Liên Kết & Điểm Nghẽn Tỷ Lệ Nội Địa Hóa (DVA)",
        desc: "Doanh nghiệp Việt Nam chủ yếu tham gia ở khâu bao bì, ép nhựa và cơ khí đơn giản. Tỷ lệ tham gia GVC giảm từ 35% xuống 18%.",
        thought: "Điểm nghẽn DVA điện tử chỉ 20-30%! Chúng ta cần thoát khỏi tầng phụ trợ cấp thấp Tier 2/3.",
        x: 1880,
        badgeVariant: "danger",
        stats: [
          { label: "DVA ngành điện tử", val: "20% - 30%", color: "danger" },
          { label: "Tham gia GVC (WB)", val: "Giảm còn 18%", color: "gold" },
        ],
      },
      {
        id: "f5-e3",
        tag: "TRẠM 03 • MỤC TIÊU CHIẾN LƯỢC 2040",
        title: "Chiến Lược Bán Dẫn Quốc Gia & 3 Con Đường Nâng Cấp",
        desc: "Quyết định 1018/QĐ-TTg đặt trọng tâm vào đào tạo 50.000 kỹ sư vi mạch bán dẫn, làm chủ công nghệ lõi và vươn lên nấc thang giá trị.",
        thought: "Quyết định 1018: Công thức C = SET + 1 và mục tiêu 50.000 kỹ sư vi mạch để làm chủ giá trị thặng dư tương đối!",
        x: 3000,
        badgeVariant: "green",
        stats: [
          { label: "Mục tiêu 2030", val: "50.000 Kỹ sư", color: "green" },
          { label: "Công thức", val: "C = SET + 1", color: "electric" },
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
    gateX: 5160,
    doorTargetName: "TẦNG 07: BÁO CÁO PHÁN QUYẾT",
    exhibits: [
      {
        id: "f6-e1",
        tag: "TRẠM 01 • ĐỘNG LỰC TĂNG TRƯỞNG & DÒNG THẶNG DƯ",
        title: "Lựa Chọn Mô Hình Phát Triển",
        desc: "Ưu tiên hút vốn FDI bằng mọi giá, hay bắt buộc liên kết chuyển giao công nghệ với doanh nghiệp nội địa, hay rót vốn nhà nước phát triển công nghệ nguồn?",
        thought: "Trạm 01: Lựa chọn mô hình tăng trưởng và phân bổ dòng thặng dư giữa vốn ngoại và nội địa!",
        x: 880,
        badgeVariant: "gold",
        stats: [
          { label: "Lựa chọn 1A", val: "FDI First (Gia công)", color: "gold" },
          { label: "Lựa chọn 1B", val: "Domestic Linkage (Liên kết)", color: "green" },
        ],
      },
      {
        id: "f6-e2",
        tag: "TRẠM 02 • SỨC LAO ĐỘNG & TỰ ĐỘNG HÓA",
        title: "Chuyển Đổi Sức Lao Động & Cấu Tạo Tư Bản",
        desc: "Duy trì nhân công giá rẻ để cạnh tranh cơ bản, hay đào tạo 50.000 kỹ sư vi mạch bán dẫn theo QĐ 1018, hay robot hóa toàn bộ?",
        thought: "Trạm 02: Biến lao động giản đơn thành lao động phức tạp để nâng tầm giá trị hàng hóa sức lao động!",
        x: 2120,
        badgeVariant: "electric",
        stats: [
          { label: "Lao động phức tạp", val: "50.000 Kỹ sư bán dẫn", color: "green" },
          { label: "Đánh đổi", val: "Ngân sách đào tạo dài hạn", color: "gold" },
        ],
      },
      {
        id: "f6-e3",
        tag: "TRẠM 03 • ĐƯỜNG CONG NỤ CƯỜI (SMILE CURVE)",
        title: "Chiếm Lĩnh Vị Thế Trong Chuỗi Giá Trị Toàn Cầu",
        desc: "Mở rộng đại công xưởng ở đáy nụ cười, hay làm chủ chip IP ở đầu nguồn, hay xây dựng thương hiệu toàn cầu ở cuối nguồn?",
        thought: "Trạm 03: Đáy nụ cười chỉ nhận 2–3% tiền công. Muốn bứt phá phải chiếm lĩnh 2 đỉnh của đường cong!",
        x: 3360,
        badgeVariant: "green",
        stats: [
          { label: "Đầu nguồn IP", val: "Fabless & Bản quyền (~45%)", color: "electric" },
          { label: "Cuối nguồn Brand", val: "Thương hiệu & Phân phối (~35%)", color: "green" },
        ],
      },
      {
        id: "f6-e4",
        tag: "TRẠM 04 • HỒ SƠ PHÁN QUYẾT CHIẾN LƯỢC 2040",
        title: "Tổng Hợp Ma Trận Lựa Chọn & Phán Quyết Vĩ Mô",
        desc: "Xem toàn văn bản đúc kết chính sách quốc gia 2040, phân tích 5 chỉ số kinh tế chính trị và các bài học rút ra.",
        thought: "Đã đến Trạm Phán Quyết 2040! Bấm 'Xem Toàn Văn Phán Quyết' và bước qua cổng để hoàn thành hành trình.",
        x: 4600,
        badgeVariant: "gold",
        stats: [
          { label: "Mô hình 2040", val: "Đã định hình", color: "gold" },
          { label: "Bước tiếp", val: "Cổng Lên Tầng 07", color: "electric" },
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
