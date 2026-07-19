window.onscroll = function () {

    let winScroll = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progress").style.width = scrolled + "%";

};

new Typed("#typing", {
    strings: [
        "Computer Science Student",
        "Java Developer",
        "AI Enthusiast",
        "AWS Learner",
        "Full Stack Developer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
});