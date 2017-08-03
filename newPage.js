class NewPage {
	static makePrint() {
        var data = '<div class="content-label"><label>Page Name</label></div><div class="content-input"><input type="text" name="pageName"></div>';

        data += '<div class="divider"></div><div class="divider"></div>';
        return data;
    }

    static setCharacteristics(page_number) {
    	$('#data').after(NewPage.makePrint());
    	$('#data').after('<input id="page_number" type="text" name="type" value="'+page_number+'" hidden readonly>');
        $('#data').after('<input id="locator" type="text" name="type" value="newPage" hidden readonly>');
        return 1;
    }
}