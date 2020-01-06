/*
 |  tail.datetime - The vanilla way to select dates and times!
 |  @file       ./langs/tail.datetime-oc.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.4.14 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.DateTime
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2018 - 2020 SamBrishes, pytesNET <info@pytes.net>
 */
/*
 |  Translator:     Quentin P
 |  GitHub:         https://github.com/pytesNET/tail.DateTime/pull/95
 */
;(function(factory){
   if(typeof(define) == "function" && define.amd){
       define(function(){
           return function(datetime){ factory(datetime); };
       });
   } else {
       if(typeof(window.tail) != "undefined" && window.tail.DateTime){
           factory(window.tail.DateTime);
       }
   }
}(function(datetime){
    datetime.strings.register("oc", {
        months: ["Genièr", "Febrièr", "Març", "Abrial", "Mai", "Junh", "Julhet", "Agost", "Setembre", "Octòbre", "Novembre", "Decembre"],
        days:   ["Dimenge", "Diluns", "Dimars", "Dimècres", "Dijòus", "Divendres", "Dissabte"],
        shorts: ["Dg", "DL", "DM", "DC", "DJ", "DV", "DS"],
        time:   ["Ora", "Minuta", "Seconda"],
        header: ["Causissètz un mes", "Causissètz una annada", "Causissètz una decennia", "Causissètz una ora"]
    });
    return datetime;
}));
