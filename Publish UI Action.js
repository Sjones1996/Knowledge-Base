function runPublish() {

    //g_form.getValue('u_expiration'
    var numberOfDaysToAdd = 0;
    gs.log("I am before the if statement");
    gs.log("expiration = " + current.u_expiration);
    if (current.u_expiration == '7 Days') {
        gs.log("I am in the if statement");
        numberOfDaysToAdd = 7;
    } else if (current.u_expiration == '1 Month') {
        numberOfDaysToAdd = 30;
    } else if (current.u_expiration == '3 Months') {
        numberOfDaysToAdd = 90;
    } else if (current.u_expiration == '6 Months') {
        numberOfDaysToAdd = 180;
    }

    var someDate = new Date();
    //var numberOfDaysToAdd = 0;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

    var dd = someDate.getDate();
    var mm = someDate.getMonth() + 1;
    var y = someDate.getFullYear();

    var someFormattedDate = y + '-' + mm + '-' + dd;
    gs.log("someFormattedDate: " + someFormattedDate);
    current.valid_to = someFormattedDate;

    //gsftSubmit(null, g_form.getFormElement(), 'publish_kb');
}
runPublish();
gs.log("runPublish");

if (typeof window == 'undefined') {
    runRulePublishCode();
}

//Server-side function

function runRulePublishCode() {
    gs.log("Inside publish code");
    current.workflow_state = 'published';
    current.u_needs_editor_review = false;
    current.published = gs.now();
    current.update();
    action.setRedirectURL(current);
}
gs.log("End of script");
