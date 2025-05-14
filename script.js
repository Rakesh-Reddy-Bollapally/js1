let v = window.prompt("Enter the name of a website (Instagram, Facebook, Google, or YouTube)");
v = v.toLowerCase();

if (v == "instagram") {
    window.open("https://www.instagram.com/");
}
else if (v == "facebook") {
    window.open("https://www.facebook.com/login.php/");
}
else if (v == "google") {
    window.open("https://www.google.com/");
}
else if (v == "youtube") {
    window.open("https://www.youtube.com/");
}
else {
    alert("Sorry this website is not available");
}