'use strict';

/* global executeCopyCommand:false, selectElementContents:false */

QUnit.module('instructor.js');

QUnit.test('executeCopyCommand()', function (assert) {
    // override execCommand with mock
    var browserImplementation = document.execCommand;
    document.execCommand = function (command) {
        assert.equal(command, 'copy', 'Copy command is executed');
    };

    executeCopyCommand();

    // restore back the original execCommand
    document.execCommand = browserImplementation;
});

QUnit.test('selectElementContents(el)', function (assert) {
    window.getSelection().removeAllRanges();

    var $contentsToSelect = $('#team_all');
    selectElementContents($contentsToSelect.get(0));

    var selectedContents = window.getSelection().toString();
    assert.equal(selectedContents, $contentsToSelect.text().replace(/ /gi, ''), 'Contents are selected');

    window.getSelection().removeAllRanges();
});