function downloadResume() {
    // Replace 'your_resume_link' with the actual link to your resume (hosted online)
    var resumeLink = 'https://drive.google.com/file/d/1JjJKXh7Sl1pPBhogySjyLy33DEmjQQu5/view';
    window.open(resumeLink, '_blank');
  }
  
  document.getElementById('download-resume-btn').addEventListener('click', downloadResume);
  