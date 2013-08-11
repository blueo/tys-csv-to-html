/*  Title: Tweet Your Science CSV converter
 *  Author: Bernard Hamlin @00pasta
 *
 */
/*jslint devel: true, browser: true*/
//the following variables are defined by included .js or the browser
/*global jQuery, CSV, Mustache, Prism, FileReader*/
(function ($) {
    "use strict";
    //Take form data and parse csv field created a key/value array for the template
    function processData(data) {
        var fdata, headers, results, obj;
        fdata = CSV.parse(data);
        //get header row to create variables for template
        headers = fdata.shift();
        results = [];
        $.each(fdata, function (i, entry) {
            //@todo loop headers for each fdata to create object and add to results array
            obj = {};
            $.each(headers, function (i, header) {
                obj[header] = entry[i]; // entry[key] not working atm
            });
            results.push(obj);
        });
        return results;
    }
    //create HTML list from array
    function createList(cdata) {
        var template;
        template = $("#tys-template-list").html();
        return Mustache.render(template, cdata);
    }
    //Init
    $(document).ready(function () {
        var $iform, wholefile, cdata, html, reader, content;
        reader = new FileReader();
        $iform = $('#tys-form');
        $iform.submit(function () {
            reader.onloadend = function (e) {
                content = e.target.result;
                console.log(content);
                cdata = processData(content);
                html = createList(cdata);
                $('[data-js="tys-code-target"]').text(html);
                $('[data-js="tys-div-target"]').html(html);
                Prism.highlightAll();
            };
            reader.readAsText(this.elements['tys-csv-file'].files[0]);
            return false;
        });
    });
}) (jQuery);
