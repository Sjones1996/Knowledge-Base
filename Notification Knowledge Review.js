var kbnum = new GlideRecord('kb_knowledge');
kbnum.addQuery('number', '=', event.parm2);
kbnum.query();
while (kbnum.next()) {
    gs.log("after query" + kbnum);
    gs.log("Author email:" + kbnum.author.email);
    email.setSubject("Knowledge Article:" + kbnum.number + " up for review.");
}
