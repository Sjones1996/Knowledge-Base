	if(typeof window == 'undefined'){
	runRulePublishCode();
}
function runRulePublishCode(){
   gs.log("Inside publish code");
   current.workflow_state = 'retired';
   current.u_needs_editor_review = false;
   current.published = gs.now();
   current.update();
   action.setRedirectURL(current);
}
