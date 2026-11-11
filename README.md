# Portfolio (BA / SA)

เว็บพอร์ตโฟลิโอแบบ static ไม่ต้อง build ใช้ HTML + CSS + JavaScript ล้วน
ออกแบบให้ deploy ขึ้น Vercel ได้ทันที

## ก่อนเผยแพร่: แทนที่ข้อมูลส่วนตัว

ข้อมูลส่วนตัวถูกกรอกครบแล้ว (ชื่อ, อีเมล, LinkedIn, GitHub) — แก้ได้ที่ `index.html` หากมีการเปลี่ยนแปลง

| จุดที่แก้ | ตำแหน่ง |
| --- | --- |
| ชื่อ-นามสกุล | `<title>`, `brand-text`, `h1` ใน hero, footer |
| อีเมล | ลิงก์ `mailto:` ในส่วนติดต่อ |
| LinkedIn / GitHub | `<a href="#">` ในส่วนติดต่อ (ใส่ URL จริง) |

คำอธิบายโครงการ ตัวเลข และเอกสารอ้างอิงจาก `docs/` จริง ไม่ต้องแก้ เว้นแต่เอกสารเปลี่ยน

## โครงสร้าง

```
portfolio/
├── index.html          หน้าเดียวจบ
├── styles.css          ธีม Marginalia (กระดาษและหมึก)
├── script.js           เมนูมือถือ, reveal on scroll, lightbox
├── vercel.json         ตั้งค่า cache และ clean URLs
└── assets/
    ├── media/          คลิป 30 วิ, เด็ค PPTX/HTML, ZIP เอกสาร
    ├── docs/           PDF 25 ฉบับ (D-00 ถึง D-24)
    └── img/            ภาพหน้าจอและแผนภาพ
```

## ดูในเครื่อง

```powershell
cd portfolio
python -m http.server 8080
# เปิด http://localhost:8080
```

## Deploy ขึ้น Vercel

```powershell
# ครั้งแรก
npm i -g vercel
vercel login

# deploy จากโฟลเดอร์นี้
cd portfolio
vercel --prod
```

หรือกำหนด Root Directory เป็น `portfolio` ในหน้า Vercel Dashboard
(ไม่ต้องมี build command, output = โฟลเดอร์นี้)

## หมายเหตุคุณภาพ

- ตรวจ responsive ที่ 390px และ 1440px แล้ว ไม่มีแนวนอนล้น
- รองรับคีย์บอร์ด มี skip link และโฟกัสมองเห็นชัด
- เคารพ `prefers-reduced-motion`
- ภาพมี alt text และโหลดแบบ lazy
