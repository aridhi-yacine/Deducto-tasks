function submitForm() {
    const checkboxes = document.getElementsByName('checkbox');
    let response = "";
    let tasks_imposter=["mto9tl 7ad lin tkaml 5 fake tasks","7awl irb7 ma8ir mto9tl 7ad","o9tel shkoun w hawl to93ed ba7dha lkill hata lin wehd yji aml report w hotha fih","awl kill mta3k lazm tkoun abad ama emergency meeting"  ];
    let tasks_crew=["susi a9rb wa7d lil bureau mta3k","a9n3 labad bch ykharjo another crew","kol mtkaml task lazmk ta3ti compliment lawl abad trah"];
    let tasks_security=["ekhdm 4 tasks wmba3d mtnjm tkaml kan ki to9tl chkoun",""];

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        switch (index + 1) {
          case 1:
            response = "Imposter";
            break;
          case 2:
            response = "Crew";
            break;
          case 3:
            response = "Security";
            break;
          default:
            break;
        }
      }
    });
  
    console.log("Response:", response);
  
  
    let task = "";
    if (response === "Imposter") {
      task = tasks_imposter[Math.floor(Math.random() * tasks_imposter.length)];
    } else if (response === "Crew") {
      task = tasks_crew[Math.floor(Math.random() * tasks_crew.length)];
    } else if (response === "Security") {
      task = tasks_security[Math.floor(Math.random() * tasks_security.length)];
    }
  
    // Redirect to another page
    // Redirect to another page with role as URL parameter
    window.location.href = "tasks.html?task=" + encodeURIComponent(task) + "&role=" + encodeURIComponent(response.toLowerCase());

  }
  