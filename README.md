# 🎬 StreamSphere OTT Platform

StreamSphere is a front-end OTT (Over-The-Top) streaming platform inspired by popular services like Netflix, Disney+ and Prime Video. It is designed to simulate a real-world streaming interface with categorized content, platform-based navigation, and interactive UI elements.

The project focuses on creating a scalable structure that can easily be extended into a full-fledged streaming platform.

---

## 🚀 Project Overview

This project demonstrates how an OTT platform can be structured using only front-end technologies. It organizes content into multiple platforms and categories, making it easy to expand by simply adding new folders, media files, or categories without changing the core logic.

Instead of hosting full movies, the platform uses **trailers and short video previews**. This approach is intentional because:

* Full movies are large in size and not practical for web hosting (especially on platforms like GitHub Pages)
* It avoids copyright issues associated with distributing full-length content
* Trailers effectively simulate the real OTT experience while keeping the project lightweight and fast
* It allows smooth playback and better performance across devices

---

## ✨ Features

* Multi-platform interface (Netflix, Disney, Prime Video)
* Categorized movie sections (Action, Comedy, Drama, Thriller, etc.)
* Interactive UI with posters and video previews
* Login page design
* Smooth navigation between pages
* Organized folder-based content system
* Responsive and visually engaging layout
* Scalable architecture for adding new content easily

---

## 📈 Scalability

The project is designed with scalability in mind:

* New platforms can be added by creating new folders and pages
* Movie categories can be extended without modifying existing code
* Media content (images/videos) can be updated independently
* Can be upgraded to a full-stack project by integrating:

  * Backend (Node.js / Django)
  * Database (MongoDB / MySQL)
  * Authentication systems
  * Real streaming APIs

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## 📁 Project Structure

```bash
StreamSphere-ott/
│
├── index.html
├── login.html
├── platform.html
├── netflix.html
├── netflix-home.html
├── disney.html
├── disney-home.html
├── primevideo.html
├── primevideo-home.html
├── script.js
│
├── assets/
│   ├── videos/
│   ├── animations/
│
├── netflix/
│   ├── Action-Packed/
│   ├── Comedy/
│   ├── Thriller-Mystery/
│   ├── Sports-Drama/
│
├── Disney/
│   ├── categories...
│
├── Prime Video/
│   ├── categories...
│
├── images/
│   ├── netflix.jpg
│   ├── disney.jpg
│   ├── primevideo.jpg
```

---

## ▶️ How to Run

1. Clone or download the repository
2. Open `index.html` in any browser

---

## 🌐 Live Demo

(Add your GitHub Pages link here after deployment)

---

## 👨‍💻 Author

**Aakarsh Agrawal**

---

## 📌 Note

This project is created for educational and demonstration purposes only. It replicates the UI/UX of OTT platforms and does not host or distribute copyrighted content.

---

## 📄 License
This project is licensed under the MIT License.
