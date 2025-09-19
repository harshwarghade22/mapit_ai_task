# 🎓 Student Check-in System

## 📌 Introduction  
The **Student Check-in System** is a full-stack web application designed to manage students and track their check-ins efficiently. It provides a simple dashboard for student management (add, list, search) and check-in management (record & view check-ins), making it ideal for classrooms, institutions, and events.  

This project demonstrates core skills in **REST API development, database integration, and responsive frontend UI design** using modern frameworks.

---

## 🚀 Features  
### 🔹 Backend (Django)  
- **Student Management APIs**  
  - `POST /students` → Add a new student (name, email, student ID).  
  - `GET /students` → Fetch all registered students.  
- **Check-in Management APIs**  
  - `POST /checkin` → Record a student check-in (student ID + timestamp).  
  - `GET /checkins` → Fetch all check-ins (with student details).  
- **Validation**  
  - Ensures **unique student IDs**.  
- **Database Support**  
  - SQLite.  

### 🔹 Frontend (React)  
- **Student Management**  
  - Form to add new students.  
  - Table to display all registered students.  
- **Check-in Management**  
  - Input for student ID → "Check In" button.  
  - Table to display all check-ins with **student name + timestamp**.  
- **UI Enhancements**  
  - Loading & error states.  
  - Fully **responsive** (desktop, tablet, mobile).  


---

## 🛠️ Tech Stack  
- **Frontend**: React.js (with Hooks & Axios)  
- **Backend**: Django REST Framework
- **Database**: SQLite  


---

## ⚙️ Installation & Setup  

### 🔹 Backend Setup  
```bash
# Clone repository
git clone https://github.com/harshwarghade22/mapit_ai_task.git
cd backend

# Create virtual environment (for Django)
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver

```
### 🔹 Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

```

## 📡 API Endpoints  

### 👩‍🎓 Student Management  
| Method | Endpoint        | Description           |
|--------|----------------|-----------------------|
| `POST` | `/students`    | Add a new student     |
| `GET`  | `/students`    | Get all students      |

### 🕒 Check-in Management  
| Method | Endpoint        | Description                    |
|--------|----------------|--------------------------------|
| `POST` | `/checkin`     | Record a student check-in       |
| `GET`  | `/checkins`    | Get all check-ins with details |


