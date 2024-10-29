const links = [
    { name: "Personal Website", url: "https://slat.cc/1bbag" },
    { name: "GitHub", url: "https://github.com/1bag" },
];

const linkContainer = document.getElementById('links');
links.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.target = '_blank';
    linkElement.textContent = link.name;
    linkContainer.appendChild(linkElement);
});