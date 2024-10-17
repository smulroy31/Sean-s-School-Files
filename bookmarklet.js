javascript:(
    void(
        function() {
            var fileRef;
            var loaded = false;

            try {
                loaded = __WCAG_LOADED__;
            } catch(err) {   
                console.log(err);
            }

            if(!loaded) {
                fileRef = document.createElement("link");
                fileRef.rel = "stylesheet";
                fileRef.type = "text/css";
                fileRef.href = "https://8080-codeanywhere-templates-p-pxaq1p7fup.app.codeanywhere.com/School/JS2/week4/wcag.css";
                document.getElementsByTagName("head")[0].appendChild(fileRef);

                fileRef = document.createElement("script");
                fileRef.src = "https://8080-codeanywhere-templates-p-pxaq1p7fup.app.codeanywhere.com/School/JS2/week4/wcag.js";
                fileRef.type = "text/javascript";
                document.getElementsByTagName("head")[0].appendChild(fileRef);
            }
        }()
    )
)