# THE VALUE SHIFT (DỊCH CHUYỂN GIÁ TRỊ)
### An Interactive Journey Through the Global Economy & Marxist Political Economy
*Tagline: Follow the value. Understand the shift. Shape Vietnam's future.*

---

## 1. Giới thiệu Dự án

**THE VALUE SHIFT** là ứng dụng web tương tác số thế hệ mới, kết hợp trải nghiệm scrollytelling điện ảnh, các mô hình trực quan hóa kinh tế học, và trò chơi mô phỏng chiến lược kinh tế 3 vòng (*Vietnam 2040*).

Mục tiêu cốt lõi: **Giải mã cuộc dịch chuyển Giá trị thặng dư ($m$) toàn cầu và định hình vị thế kinh tế của Việt Nam dưới lăng kính Kinh tế chính trị Mác – Lênin.**

---

## 2. Cấu trúc Trải nghiệm (7 Chặng)

1. **Mở đầu (Hero & The Hook):** Đặt vấn đề bằng nghịch lý xuất khẩu công nghệ kỷ lục nhưng giá trị thặng dư lưu lại trong nước rất mỏng.
2. **01. Nghịch lý Toàn cầu (The Paradox):** So sánh dữ liệu xuất nhập khẩu điện tử 2026 (207,02 tỷ USD xuất khẩu vs 224,51 tỷ USD nhập khẩu linh kiện) kèm Poll tương tác thăm dò nhận thức.
3. **02. Theo dấu Sản phẩm (Follow the Product):** Khám phá 6 công đoạn của chuỗi cung ứng smartphone (Nguyên liệu thô, Bán dẫn, R&D/IP, Lắp ráp, Thương hiệu, Phân phối) với Modal phân tích chuyên sâu (Deep Dive KTCT & GVC).
4. **03. Giải mã Giá trị (Decode the Value):** Phân tích $W = c + v + m$ kèm **Working Day Simulator** tương tác trực tiếp với thanh trượt giờ làm việc ($T$), lao động tất yếu ($v$) và cấu tạo hữu cơ ($c/v$).
5. **04. Dòng chảy Toàn cầu (The Global Shift):** Phân tích mô hình **Đường cong nụ cười (Smile Curve)** với 3 điểm chạm (Đầu nguồn, Đáy, Cuối nguồn).
6. **05. Vị thế Việt Nam (Vietnam's Position):** Bảng số liệu thực chứng (OECD TiVA, WB, GSO), Công thức Bán dẫn $C = SET + 1$ (QĐ 1018/QĐ-TTg) và 3 con đường nâng cấp vị thế.
7. **06 & 07. Thử thách Vietnam 2040 (The Challenge & Verdict):** Bàn cờ chiến lược 3 vòng với 5 chỉ số kinh tế thời gian thực, cơ chế tính toán tất định và xuất Hồ sơ Chiến lược tổng kết.

---

## 3. Kiến trúc Công nghệ & Thư viện

- **Framework:** Next.js 16 (App Router) với Turbopack & React 19.
- **Language:** TypeScript 5 (Strict Mode).
- **Styling & Design Tokens:** Tailwind CSS v4 (`src/app/globals.css`).
- **Typography:** Space Grotesk (tiêu đề), Inter (nội dung), IBM Plex Mono (số liệu).
- **Animation & Transitions:** Framer Motion & GSAP.
- **Biểu đồ & Mô phỏng:** ECharts & Tailwind CSS Native Bars.
- **Quản lý Trạng thái & Lưu trữ:** LocalStorage Persistence Hook (`src/hooks/use-persistence.ts`).
- **Xác thực Schema:** Zod.

---

## 4. Hướng dẫn Cài đặt & Chạy Dự án

### Yêu cầu môi trường
- Node.js $\ge 18.18.0$ (Đã kiểm thử trên Node v22.21.1)
- npm $\ge 9.0.0$

### Khởi động môi trường phát triển (Dev)
```bash
# Cài đặt thư viện (nếu chưa chạy)
npm install

# Khởi động local dev server
npm run dev
```
Mở trình duyệt tại: **`http://localhost:3000`**

### Kiểm tra Build & Type Check
```bash
# Biên dịch sản phẩm (Production build)
npm run build

# Chạy server sản xuất
npm run start
```

### Chạy Bộ Kiểm thử Game Engine (Test Suite)
```bash
npx tsx src/lib/game/test-runner.ts
```

---

## 5. Hướng dẫn Cập nhật Dữ liệu & Quy tắc Mô phỏng

### 5.1. Cập nhật Số liệu Thực tế (Empirical Datasets)
Toàn bộ số liệu thực chứng kèm nguồn gốc học thuật được quản lý tập trung tại:  
📁 [`src/lib/data/research.ts`](src/lib/data/research.ts)

Mỗi điểm dữ liệu tuân thủ schema nghiêm ngặt:
```typescript
{
  id: string;
  title: string;
  value: number;
  unit: string;
  year: number;
  source: { name: string; url: string; publicationYear?: number };
  methodologyNote?: string;
  interpretation: string;
  status: "verified" | "illustrative";
}
```

### 5.2. Cập nhật Kịch bản & Quy tắc Game (*Vietnam 2040*)
- **Kịch bản các vòng & Lựa chọn:** Chỉnh sửa tại 📁 [`src/lib/game/data.ts`](src/lib/game/data.ts).
- **Thuật toán tính điểm tất định & Phân loại Archetype:** Chỉnh sửa tại 📁 [`src/lib/game/engine.ts`](src/lib/game/engine.ts).
- **Đặc tả luật chơi chính thức:** Xem tại 📁 [`docs/05-game/game-rules.md`](docs/05-game/game-rules.md).

---

## 6. Tiêu chí Chất lượng & Miễn trừ Trách nhiệm

- **Zero Fake Interactions:** 100% các nút bấm, thanh trượt, thẻ lựa chọn đều cập nhật trạng thái thực tế và tự động lưu vào LocalStorage (giữ nguyên tiến trình khi tải lại trang).
- **Học thuật chuẩn xác:** Phân biệt rành mạch giữa Giá trị thặng dư ($m$) theo Marx và Lợi nhuận kế toán / Giá trị gia tăng nội địa (DVA) theo chuẩn OECD.
- **Minh họa Sư phạm:** Các tham số trong game mô phỏng và thanh trượt Working Day là mô hình minh họa sư phạm, không cấu thành dự báo kinh tế lượng của cơ quan nhà nước.

---
*Dự án phục vụ môn học Kinh tế Chính trị Mác – Lênin (MLN122) — 2026.*
