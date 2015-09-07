var test = require('tape'),
    caroot = require('../'),
    path = require('path');

function resolve(caretedPath, currentPath){
    var directory = path.resolve(__dirname, currentPath);

    return caroot(caretedPath, directory);
}

test('deep to shallow', function(t) {
    t.plan(1);

    t.equal(
        resolve('^foo', './lvl1/lvl2/lvl3/lvl4/lvl5'),
        '../../../../../foo',
        'Resolves correctly'
    );
});

test('shallow to deep', function(t) {
    t.plan(1);

    t.equal(
        resolve('^foo/bar/things/stuff', './'),
        './foo/bar/things/stuff',
        'Resolves correctly'
    );
});

test('shallow to shallow', function(t) {
    t.plan(1);

    t.equal(
        resolve('^foo', './'),
        './foo',
        'Resolves correctly'
    );
});

test('deep to deep', function(t) {
    t.plan(1);

    t.equal(
        resolve('^foo/bar/things/stuff', './lvl1/lvl2/lvl3/lvl4/lvl5'),
        '../../../../../foo/bar/things/stuff',
        'Resolves correctly'
    );
});

test('up a level caret', function(t) {
    t.plan(1);

    t.equal(
        resolve('^../foo', './lvl1'),
        '../../foo',
        'Resolves correctly'
    );
});

test('with a dot caret', function(t) {
    t.plan(1);

    t.equal(
        resolve('^./foo', './lvl1'),
        '../foo',
        'Resolves correctly'
    );
});

test('slash normal caret', function(t) {
    t.plan(1);

    t.equal(
        resolve('^/foo', './lvl1'),
        '../foo',
        'Resolves correctly'
    );
});

test('dot slash normal caret', function(t) {
    t.plan(1);

    t.equal(
        resolve('^./foo', './lvl1'),
        '../foo',
        'Resolves correctly'
    );
});


test('normal non caret', function(t) {
    t.plan(1);

    t.equal(
        resolve('../foo', './lvl1'),
        '../foo',
        'Resolves correctly'
    );
});

test('normal module', function(t) {
    t.plan(1);

    t.equal(
        resolve('foo', './lvl1'),
        'foo',
        'Resolves correctly'
    );
});
