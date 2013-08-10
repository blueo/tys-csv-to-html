/*  Title: Tweet Your Science CSV converter
 *  Author: Bernard Hamlin @00pasta
 *
 */
/*jslint devel: true, browser: true*/
/*global jQuery, CSV, Mustache*/
(function ($) {
    "use strict";
    //Take form data and parse csv field created a key/value array for the template
    function processData(data) {
        var fdata, headers, results, obj, count;
        data = $(data).serializeArray();
        fdata = CSV.parse(data[0].value);
        //Remove header row
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
        var template, html;
        template = $("#tys-template-list").html();
        html = Mustache.render(template, cdata);
        $('[data-js="tys-list-target"]').append(html);
    }
    //Init
    $(document).ready(function () {
        var $iform, wholefile, cdata;
        $iform = $('#tys-form');
        $iform.submit(function () {
            cdata = processData(this);
            createList(cdata);
            return false;
        });
    });
}) (jQuery);
