{/* <script type="text/javascript"> */}
    // Function to handle language selection and persistence
    function changeLanguage(lang) {
        // Set the language for Google Translate
        var translateElement = document.querySelector('.goog-te-combo');
        translateElement.value = lang;
        translateElement.dispatchEvent(new Event('change'));

        // Store selected language preference in localStorage
        localStorage.setItem('selectedLanguage', lang);

        // Redirect to the homepage or reload the current page to apply the language change
        window.location.href = '/';
    }

    // Function to set the page language based on user preference
    function setPageLanguage() {
        var selectedLanguage = localStorage.getItem('selectedLanguage');
        if (selectedLanguage) {
            changeLanguage(selectedLanguage);
        }
    }

    // Call the setPageLanguage function when the page loads
    setPageLanguage();
// </script>

// <!-- translator -->

        // // <script type="text/javascript">
        //     function googleTranslateElementInit() {
        //         new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
        //     }
        // // </script>

        // <script type="text/javascript"
        //     src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

        // <!-- translator -->

        // <script type="text/javascript">
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
            }
        // </script> 

        <script type="text/javascript" 
         src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>