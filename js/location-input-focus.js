if (window.matchMedia('(max-width: 770px)').matches) {
        let list = document.getElementsByClassName("location-list")[0];
        document.getElementById("locationInput").addEventListener("focus", () => {
                list.style.display = "block";
                
        });
        document.getElementById("locationInput").addEventListener("blur", () => {
                list.style.display = "none";
        });
}