var validToDate = ["30", "14", "7", "3", "1", "-1"];
//var arrayLength = validToDate.length;
for (var i = 0; i < validToDate.length; i++) {
    doit(validToDate[i]);
    //Do something
    gs.log("Inside the for loop");
}

function doit(vtd) {
    gs.log("after the function doit " + vtd + " " + gs.daysAgo(-vtd + 1) + " " + gs.daysAgo(-vtd - 1));
    var gr = new GlideRecord('kb_knowledge');
    gr.addQuery('valid_to', '<=', gs.daysAgo(-vtd - 1));
    gr.addQuery('valid_to', '>=', gs.daysAgo(-vtd + 1));
    gr.query();
    while (gr.next()) {
        gr.u_needs_renewal = true
        gr.update();
        gs.log("I am after the while Number:" + gr.number);
        gs.eventQueue("notification.review", current, gr.author.email, gr.number);
    }
    gs.log("I am after the eventQueue");

}
