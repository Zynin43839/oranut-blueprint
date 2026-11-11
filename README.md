# Portfolio (BA / SA)

เว็บพอร์ตโฟลิโอสาย Business Analyst / System Analyst แบบ static ไม่ต้อง build
ใช้ HTML + CSS + JavaScript ล้วน และ deploy ขึ้น Vercel ได้ทันที

- ฉบับไทย: https://oranut-ba-portfolio.vercel.app
- ฉบับอังกฤษ: https://oranut-ba-portfolio.vercel.app/en/

## ขอบเขตของ repo นี้

repo นี้เป็นบ้านของงานวิเคราะห์ทั้ง 25 ฉบับ (ไทยและอังกฤษ) แบ่งเป็นสองครึ่ง

- ครึ่งวิเคราะห์ธุรกิจ (14 ฉบับ): case study, product brief, stakeholder matrix,
  AS-IS/TO-BE, SRS, user stories, use cases, business rules, traceability matrix,
  UAT, roadmap, change request log และ glossary
- ครึ่งออกแบบระบบ (11 ฉบับ): process flows, C4 สามระดับ, data model, sequence diagrams,
  DFD และ privacy, wireframes, API contract, ADR, NFR, risk register และ test plan

พร้อมเด็ค 22 สไลด์สองภาษาและไฟล์ ZIP สำหรับดาวน์โหลด

สิ่งที่อยู่ที่อื่น

| เนื้อหา | อยู่ที่ |
| --- | --- |
| โค้ดของแอป RAG-Diary | repo `rag-diary` |
| พอร์ตสาย AI Engineer | repo `ai-portfolio` |
| ต้นฉบับเอกสาร Markdown | โปรเจกต์ RAG-Diary โฟลเดอร์ `docs/` |

## โครงสร้าง

```
ba-portfolio/
├── index.html          หน้าภาษาไทย
├── en/index.html       หน้าภาษาอังกฤษ
├── styles.css          ธีม Marginalia (กระดาษและหมึก)
├── script.js           เมนูมือถือ, reveal on scroll, lightbox
├── vercel.json         ตั้งค่า cache และ clean URLs
└── assets/
    ├── docs/           PDF ไทย 25 ฉบับ (D-00 ถึง D-24)
    ├── docs/en/        PDF อังกฤษ 25 ฉบับ
    ├── media/          คลิป 30 วิ, เด็ค 2 ภาษา, ZIP 2 ภาษา
    └── img/            ภาพหน้าจอและแผนภาพ
```

## ดูในเครื่อง

```powershell
cd ba-portfolio
python -m http.server 8080
# เปิด http://localhost:8080
```

## Deploy ขึ้น Vercel

```powershell
npx vercel --prod
```

โปรเจกต์บน Vercel ชื่อ `oranut-ba-portfolio` (ผูกไว้ใน `.vercel/project.json` แล้ว)

## อัปเดตเอกสารและเด็ค

เอกสารทั้งหมดสร้างจากโปรเจกต์ RAG-Diary แล้วคัดลอกมาที่ repo นี้

```powershell
cd ../RAG-Diary
python scripts/build_docs_pdf.py            # PDF ไทย
python scripts/build_docs_pdf.py --en       # PDF อังกฤษ
python scripts/sync_portfolio_assets.py     # คัดลอก PDF + rebuild ZIP ทั้งสองภาษา
```

เด็คสร้างจาก `output/presentation` ในโปรเจกต์เดียวกัน แล้วคัดลอกมาไว้ที่ `assets/media/`

## หมายเหตุคุณภาพ

- ตรวจ responsive ที่ 390px และ 1440px แล้ว ไม่มีแนวนอนล้น
- รองรับคีย์บอร์ด มี skip link และโฟกัสมองเห็นชัด
- เคารพ `prefers-reduced-motion`
- ภาพมี alt text และโหลดแบบ lazy
- ลิงก์ภายในทุกเส้นตรวจแล้วว่าไฟล์ปลายทางมีจริง
