# Thượng Đỉnh Yến Hoa — Website v10 (bản deploy)

Bảng màu mới: xanh rêu `#1c4631` + vàng gold `#b79366` + nền sứ ngà `#e8e3d8`.

## Deploy nhanh
- **Cloudflare Pages / Netlify / Vercel**: kéo thả cả thư mục này hoặc kết nối GitHub repo → entry point tự động `index.html`
- **GitHub Pages**: đẩy code lên nhánh `main`, vào Settings → Pages → Deploy from branch `main` / root

## Cấu trúc
- `index.html` — trang chủ (bản deploy chính, copy của `index-v10.html`)
- `cong-dong-v10.html`, `tai-tro-v10.html`, `san-pham-yen-chung-san-v10.html`, `ve-chung-toi-v10.html` — 4 trang con
- `css/` — style-v10.css, about-v10.css, carousel-v10.css
- `js/` — toàn bộ script dùng chung (main-v7.js, gallery-v8.js, lightbox-v9.js, carousel-v7.js...)
- `assets/` — fonts + hình ảnh

## Local preview
```bash
python -m http.server 8571
# http://localhost:8571
```

## Ghi chú
Đây là bản đầy đủ, độc lập của phiên bản v10 (đã đổi màu chủ đạo, đồng bộ cỡ chữ/khoảng cách dòng/màu chữ toàn site). Không cần build step — chỉ cần deploy nguyên thư mục này.
