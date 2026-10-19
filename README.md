# Rujisaya Kuekool – UX/UI Designer Portfolio Website

เว็บไซต์พอร์ตโฟลิโอส่วนตัวของ **คุณรุจิสยา เกื้อกูล (Toey)** ตำแหน่ง **Mid-level UX/UI Designer**
ดีไซน์สไตล์มินิมอล โมเดิร์น คลีน เรียบหรู ตามแบบอย่าง [Matt Fredette's Portfolio](https://www.mattfredette.com/#case-studies) พร้อมเชื่อมต่อกับฐานข้อมูล **MongoDB Atlas** แบบ Real-time

- 🌐 **Live Website (Vercel):** [https://rujisaya-portfolio.vercel.app](https://rujisaya-portfolio.vercel.app)
- 🐙 **GitHub Repository:** [https://github.com/rujisayak/rujisaya-portfolio](https://github.com/rujisayak/rujisaya-portfolio)

---

## 🌟 จุดเด่นของเว็บไซต์ (Features)

1. **สไตล์ดีไซน์ระดับสากล (Matt Fredette Aesthetic):**
   - ใช้ฟอนต์ **Bricolage Grotesque** (หัวข้อเด่นและเอกลักษณ์) คู่กับ **Inter** (เนื้อหาอ่านง่าย)
   - Layout แบบ Modern Grid & Cards มี Mockup Frame และ Micro-interactions
   - ป้ายสถานะ Pulsing Badge: *"Available for UX/UI Opportunities"*
2. **หมวดหมู่ Case Studies แบบ Interactive (`#case-studies`):**
   - มีระบบ Filter กรองโปรเจกต์ตามหมวดหมู่:
     - All Projects
     - Threat Intelligence
     - Rule Engine & Logic Builder
     - Incident Response & Case Management
     - Data Analytics & Visualizations
     - Dev Handoff & Backend UI Flows
   - สามารถคลิก **"View Case Study"** เพื่อเปิด Modal Deep-Dive ดูภาพความละเอียดสูง วัตถุประสงค์ ปัญหาที่แก้ (Challenge) และผลลัพธ์ (Impact)
3. **เนื้อหาตรงตามประวัติและผลงานจริงจากไฟล์ Resume & Portfolio PDF:**
   - ประสบการณ์จาก **Security Pitch Company Limited** (2+ ปี)
   - เกียรตินิยมอันดับ 1 (GPA 3.73) เทคโนโลยีสารสนเทศ มหาวิทยาลัยสวนดุสิต
   - จุดเด่นเรื่องการทำ **Backend UI Flow & API Mapping** เชื่อมต่อนักพัฒนาระบบได้อย่างมีประสิทธิภาพ
4. **ดาวน์โหลดเอกสารได้ทันที (`#resume`):**
   - ดาวน์โหลด **Rujisaya Resume (PDF)**
   - ดาวน์โหลด **Full Portfolio Deck (12 Pages PDF)**
5. **แบบฟอร์มติดต่อเชื่อมโยง MongoDB Atlas (`#contact`):**
   - บัตรข้อมูลติดต่อคลิกแล้ว Copy อัตโนมัติ (Email, Phone, Line ID)
   - ฟอร์ม **Send a Direct Message** บันทึกข้อมูลผู้ติดต่อลง collection `contacts` ใน MongoDB Atlas ทันที
   - มี Status Badge แสดงสถานะการเชื่อมต่อฐานข้อมูล MongoDB Atlas แบบ Live

---

## 🗄️ โครงสร้างฐานข้อมูล (MongoDB Database)

- **Cluster:** `rujik.ctjp2ul.mongodb.net`
- **Database Name:** `portfolio_db`
- **Collections:**
  - `profile`: เก็บข้อมูลประวัติ ข้อมูลติดต่อ ประสบการณ์ การศึกษา ทักษะ
  - `case_studies`: เก็บข้อมูลโปรเจกต์ ทั้ง 6 เคส พร้อมรูปภาพ แท็ก และเนื้อหาแบบละเอียด
  - `contacts`: เก็บข้อความติดต่อที่ส่งมาจากฟอร์มหน้าเว็บ พร้อม timestamp และสถานะ

---

## 🚀 วิธีเปิดใช้งาน (Getting Started)

### 1. เปิดเซิร์ฟเวอร์
```bash
npm start
```
หรือ
```bash
node server.js
```

### 2. เข้าชมเว็บไซต์ผ่านเบราว์เซอร์
เปิดเบราว์เซอร์ไปที่:
👉 **[http://localhost:3000](http://localhost:3000)**
หรือตรงไปที่หมวด Case Studies:
👉 **[http://localhost:3000/#case-studies](http://localhost:3000/#case-studies)**

### 3. หากต้องการ Re-seed ข้อมูลเข้า MongoDB ใหม่
```bash
npm run seed
```

---

## 📂 โครงสร้างไฟล์ในโปรเจกต์

```text
profile /
├── .env                     # MongoDB Atlas Connection String
├── package.json             # NPM dependencies (express, mongodb, cors, dotenv)
├── server.js                # Express Server + MongoDB Atlas API
├── db/
│   ├── seed.js              # สคริปต์ Populate ข้อมูล Profile & Case Studies เข้า MongoDB
│   └── seedFallback.json    # สำรองข้อมูลออฟไลน์
├── public/                  # Static Web Assets
│   ├── index.html           # โครงสร้างหน้าเว็บหลัก (Hero, Case Studies, About, Resume, Contact)
│   ├── styles.css           # สไตล์ชีทสไตล์ Matt Fredette (Bricolage Grotesque & Inter)
│   ├── app.js               # จัดการดึง API, ฟิลเตอร์, Modal, Form submit
│   ├── Rujisaya Resume.pdf  # ไฟล์ Resume ฉบับเต็ม
│   ├── PortfolioRujisaya.pdf# ไฟล์ Portfolio สไลด์ 12 หน้า
│   └── assets/
│       ├── avatar_square.png# ภาพโปรไฟล์ของคุณรุจิสยา
│       ├── resume_preview.png
│       └── portfolio/       # ภาพหน้าจอโปรเจกต์จากสไลด์ (page_1.png ถึง page_12.png)
└── README.md
```
