/**
 * Created by sid on 19/5/17.
 */

var html0bj = function() {
    this.set = function(id, value) {
        document.getElementById(id).innerHTML = value;
        return true;
    };
    this.get = function (id) {
        return document.getElementById(id).innerHTML;
    };
    this.append = function (id, value) {
        var previous_value = this.get(id);
        if (previous_value == null) {
            var updated_value = value;
        }
        else {
            var updated_value = document.getElementById(id).innerHTML + value;
        }
        this.set(id, updated_value);
        return true;
    };
};

var ulList = function () {
    this.append = function (id, value) {
        document.getElementById(id).appendChild(value);
        return true;
    };
};

var inputObj = function() {
    this.set = function(id, value) {
        document.getElementById(id).value = value;
        return true;
    };
    this.get = function (id) {
        return document.getElementById(id).value;
    }
};

var HttpClient = function() {
    this.get = function(aUrl, async, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        };

        anHttpRequest.open( "GET", aUrl, async );
        anHttpRequest.send( null );
    };
    this.post = function (aUrl, aData, async, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        };
        anHttpRequest.open("POST", aUrl, async );
        anHttpRequest.setRequestHeader("Content-type","application/json;");
        anHttpRequest.send( JSON.stringify(aData));
    }
};

var DOMLoad = function () {
    this.ready = function (fn) {
        if (document.readyState != 'loading'){
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState != 'loading')
                    fn();
            });
        }
    };
};

var jAwe = function () {
    this.html = new html0bj();
    this.input = new inputObj();
    this.request = new HttpClient();
    this.document = new DOMLoad();
    this.ullist = new ulList();
};

var jAwesome = new jAwe();
