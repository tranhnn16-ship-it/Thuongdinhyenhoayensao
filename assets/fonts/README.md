# Trạng thái font

## ✅ SVN-Gilroy — Đã xong
File `SVN-Gilroy.zip` anh gửi là **bản thật**, đầy đủ 20 file (10 weight +
italic), kiểm tra đủ 74/74 ký tự có dấu tiếng Việt. Đã convert sang
`.woff2` và đặt tại `assets/fonts/SVN-Gilroy/` — toàn bộ phần body text của
site hiện dùng font này.

## ⚠️ SVN-Glorify Sans — Vẫn chưa đúng file
File `glorify.zip` gửi lần 2 vẫn là **bản demo miễn phí "Glorify"** của
Letterhend Studio (chỉ dùng cá nhân, không có bản quyền thương mại) —
**không có dấu tiếng Việt** (thiếu 74/74 ký tự kiểm tra). Đây là font demo
trùng tên tải free trên mạng, khác hoàn toàn với font thương mại
**SVN-Glorify Sans** (mua tại các trang bán font Việt hóa như svnfonts.vn).

➡️ Site đang tạm dùng **Playfair Display** (Google Fonts, có đủ dấu tiếng
Việt, phong cách serif sang trọng gần giống) cho phần tiêu đề/logo chữ.
Khi có đúng file SVN-Glorify Sans (đuôi `.otf`/`.ttf`), đặt vào:

```
assets/fonts/SVN-Glorify-Sans/
  SVNGlorifySans-Regular.woff2
  SVNGlorifySans-Medium.woff2
  SVNGlorifySans-SemiBold.woff2
  SVNGlorifySans-Bold.woff2
```

Gửi Claude file `.otf`/`.ttf` gốc là được, không cần tự convert sang
`.woff2`.
