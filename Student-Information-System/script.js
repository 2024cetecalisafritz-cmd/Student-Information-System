document.addEventListener(
    "DOMContentLoaded",
    function () {


        // Get the button

        const viewButton =
            document.getElementById(
                "viewButton"
            );


        // Check if button exists

        if (viewButton) {


            

            viewButton.addEventListener(
                "click",
                function () {


                    

                    const studentRecords =
                        document.getElementById(
                            "students"
                        );


                    // Scroll to student records

                    studentRecords.scrollIntoView({
                        behavior: "smooth"
                    });


                }
            );

        }


    

        console.log(
            "Student Information System is ready."
        );

    }
);