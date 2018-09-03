try {
    $_documentContainer.setAttribute('style', 'display: none;');
    appenTemplate($_documentContainer);
} catch(err) {
    const $_documentContainer = document.createElement('template');
    $_documentContainer.setAttribute('style', 'display: none;');
    appenTemplate($_documentContainer);
}
function appenTemplate($_documentContainer) {
  $_documentContainer.innerHTML = `<dom-module id="corporate-ui"><template><style>
  /* DO NOT REMOVE "corporate-ui.css", it will be replace by gulp */
  
@import url("https://static.scania.com/resources/logotype/scania/logotype-stylesheet/scania-logotype.css");
@import url("https://static.scania.com/resources/fonts/scania-sans/scania-fonts.css");
@import url("https://static.scania.com/resources/fonts/font-awesome/font-awesome.css");
@import url("https://static.scania.com/resources/icons/scania/icons.css");
/*!
 * Corporate UI
 * Maintained and Developed by IXCC : corporate-ui.slack.com
 */
.compiled_at {
  content: "Mon Sep 03 2018 17:00:07 GMT+0200 (W. Europe Daylight Time)";
}
.app article {
  display: block;
}
.public h1,
.app .public h1,
.portlet-application h1 {
  margin: .67em 0;
  font-size: 2em;
}
@media print {
  .public h2,
  .app .public h2,
  .public h3,
  .app .public h3,
  .public p,
  .app .public p,
  .portlet-application h2,
  .portlet-application h3,
  .portlet-application p {
    orphans: 3;
    widows: 3;
  }
  .public h2,
  .app .public h2,
  .public h3,
  .app .public h3,
  .portlet-application h2,
  .portlet-application h3 {
    page-break-after: avoid;
  }
}
.public h1,
.app .public h1,
.public h2,
.app .public h2,
.public h3,
.app .public h3,
.public h4,
.app .public h4,
.public h5,
.app .public h5,
.public h6,
.app .public h6,
.portlet-application h1,
.portlet-application h2,
.portlet-application h3,
.portlet-application h4,
.portlet-application h5,
.portlet-application h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.public h1,
.app .public h1,
.public h2,
.app .public h2,
.public h3,
.app .public h3,
.portlet-application h1,
.portlet-application h2,
.portlet-application h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
.public h4,
.app .public h4,
.public h5,
.app .public h5,
.public h6,
.app .public h6,
.portlet-application h4,
.portlet-application h5,
.portlet-application h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.public h1,
.app .public h1,
.portlet-application h1 {
  font-size: 36px;
}
.public h2,
.app .public h2,
.portlet-application h2 {
  font-size: 30px;
}
.public h3,
.app .public h3,
.portlet-application h3 {
  font-size: 24px;
}
.public h4,
.app .public h4,
.portlet-application h4 {
  font-size: 18px;
}
.public h5,
.app .public h5,
.portlet-application h5 {
  font-size: 14px;
}
.public h6,
.app .public h6,
.portlet-application h6 {
  font-size: 12px;
}
.public p,
.app .public p,
.portlet-application p {
  margin: 0 0 10px;
}
.form-condensed .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-md {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-group > .btn-group-lg > .btn + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group-lg > .btn .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.dropup .btn-group-lg > .btn .caret {
  border-width: 0 5px 5px;
}
.navbar-btn.btn-group-sm > .btn {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-group-xs > .btn {
  margin-top: 14px;
  margin-bottom: 14px;
}
.btn-group-xs > .btn .badge {
  top: 0;
  padding: 1px 5px;
}
.portlet-application {
  padding: 15px;
}
.panel > .portlet-application + .table,
.panel > .portlet-application + .table-responsive {
  border-top: 1px solid #ddd;
}
.panel-group .panel-heading + .panel-collapse > .portlet-application {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer + .panel-collapse .portlet-application {
  border-bottom: 1px solid #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .portlet-application {
  border-top-color: #ddd;
}
.panel-default > .panel-footer + .panel-collapse > .portlet-application {
  border-bottom-color: #ddd;
}
.panel-primary > .panel-heading + .panel-collapse > .portlet-application {
  border-top-color: #428bca;
}
.panel-primary > .panel-footer + .panel-collapse > .portlet-application {
  border-bottom-color: #428bca;
}
.panel-success > .panel-heading + .panel-collapse > .portlet-application {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-footer + .panel-collapse > .portlet-application {
  border-bottom-color: #d6e9c6;
}
.panel-info > .panel-heading + .panel-collapse > .portlet-application {
  border-top-color: #bce8f1;
}
.panel-info > .panel-footer + .panel-collapse > .portlet-application {
  border-bottom-color: #bce8f1;
}
.panel-warning > .panel-heading + .panel-collapse > .portlet-application {
  border-top-color: #faebcc;
}
.panel-warning > .panel-footer + .panel-collapse > .portlet-application {
  border-bottom-color: #faebcc;
}
.panel-danger > .panel-heading + .panel-collapse > .portlet-application {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-footer + .panel-collapse > .portlet-application {
  border-bottom-color: #ebccd1;
}
.portlet-application:before,
.portlet-application:after {
  display: table;
  content: " ";
}
.portlet-application:after {
  clear: both;
}
body {
  margin: 0;
  height: 100vh;
  -webkit-print-color-adjust: exact;
}
body.app {
  background-color: #f7f7f7;
}
h1,
h2,
h3,
h4,
h5,
h6,
.public h1,
.app .public h1,
.public h2,
.app .public h2,
.public h3,
.app .public h3,
.public h4,
.app .public h4,
.public h5,
.app .public h5,
.public h6,
.app .public h6,
.portlet-application h1,
.portlet-application h2,
.portlet-application h3,
.portlet-application h4,
.portlet-application h5,
.portlet-application h6 {
  padding-top: 15px;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 10px;
  border-bottom: 0;
}
h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small {
  margin: 0 6px;
}
h1 + h2,
h2 + h3,
h3 + h4,
h4 + h5,
h5 + h6 {
  padding-top: 0;
}
p,
.public p,
.app .public p,
.portlet-application p {
  margin-bottom: 20px;
}
dd {
  margin-bottom: 15px;
}
hr {
  margin: 10px 0;
}
input[disabled] {
  cursor: default;
}
input[type="button"] {
  cursor: pointer;
  -webkit-appearance: button;
}
input[type=text]::-ms-clear {
  width: 0;
  height: 0;
}
kbd {
  margin: 0px 0.1em;
  padding: 0.1em 0.6em;
  border-radius: 3px;
  border: 1px solid #cccccc;
  color: #333333;
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  display: inline-block;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 0px 2px #ffffff;
  background-color: #f7f7f7;
  -moz-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
  -webkit-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  text-shadow: 0 1px 0 #fff;
}
.container-fluid {
  padding-left: 30px;
  padding-right: 30px;
}
article.container,
article .container {
  max-width: 1170px;
}
.container .container {
  width: auto;
}
.lead {
  margin-bottom: 20px;
}
dt.divider {
  border-top: 1px solid #ddd;
  padding-top: 5px;
}
dd.divider {
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.avatar > img {
  width: 100%;
  margin-top: 50%;
  transform: translateY(-50%);
}
body {
  opacity: 1;
}
.polymer-loading body {
  opacity: 0;
}
@media (max-width: 1200px) {
  .container-fluid {
    margin-left: 15px;
    margin-right: 15px;
  }
}
@media (min-width: 1600px) {
  .container {
    width: 1400px;
  }
}
.btn,
.btn-md {
  padding: 20px 40px;
  border-radius: 0;
  font-family: "Scania Sans Bold";
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.btn > [class*=icon],
.btn > [class*=icon]:before {
  line-height: normal;
}
.btn:focus,
.btn:active:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-default,
.btn-default:focus,
.btn-default:disabled,
.btn-default.disabled,
fieldset[disabled] .btn-default {
  color: #033a6a;
  background-color: #fff;
  border-color: #033a6a;
}
.btn-default:hover,
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
  color: #033a6a;
  background-color: #ffffff;
  border-color: #ffffff;
}
.btn-primary,
.btn-primary:focus,
.btn-primary:disabled,
.btn-primary.disabled,
fieldset[disabled] .btn-primary {
  color: #fff;
  background-color: #041e42;
  border-color: #041e42;
}
.btn-primary:hover,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #073472;
  border-color: #073472;
}
.btn-success,
.btn-success:focus,
.btn-success:disabled,
.btn-success.disabled,
fieldset[disabled] .btn-success {
  color: #fff;
  background-color: #44a878;
  border-color: #44a878;
}
.btn-success:hover,
.btn-success:active,
.btn-success.active,
.open .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #60bf91;
  border-color: #60bf91;
}
.btn-info,
.btn-info:focus,
.btn-info:disabled,
.btn-info.disabled,
fieldset[disabled] .btn-info {
  color: #fff;
  background-color: #4a8ba4;
  border-color: #4a8ba4;
}
.btn-info:hover,
.btn-info:active,
.btn-info.active,
.open .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #67a3ba;
  border-color: #67a3ba;
}
.btn-warning,
.btn-warning:focus,
.btn-warning:disabled,
.btn-warning.disabled,
fieldset[disabled] .btn-warning {
  color: #fff;
  background-color: #f2855f;
  border-color: #f2855f;
}
.btn-warning:hover,
.btn-warning:active,
.btn-warning.active,
.open .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #f6a98e;
  border-color: #f6a98e;
}
.btn-danger,
.btn-danger:focus,
.btn-danger:disabled,
.btn-danger.disabled,
fieldset[disabled] .btn-danger {
  color: #fff;
  background-color: #cc1040;
  border-color: #cc1040;
}
.btn-danger:hover,
.btn-danger:active,
.btn-danger.active,
.open .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #ee2156;
  border-color: #ee2156;
}
.app .btn {
  font-family: "Scania Sans Semi Condensed Bold";
  padding: 6px 12px;
  text-transform: none;
  font-size: 1.4rem;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 20px 40px;
  font-size: 14px;
}
.app .btn-lg,
.app .btn-group-lg > .btn {
  padding: 14px 28px;
  font-size: 1.6rem;
}
.btn-sm,
.btn-group-sm > .btn {
  font-size: 12px;
  padding: 7px 11px;
}
.btn-sm [class^="icon-"],
.btn-sm [class*=" icon-"],
.btn-group-sm > .btn [class^="icon-"],
.btn-group-sm > .btn [class*=" icon-"] {
  font-size: 14px;
  line-height: 13px;
  vertical-align: middle;
}
.app .btn-sm,
.app .btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 1.2rem;
}
.btn-xs,
.btn-group-xs > .btn {
  font-size: 11px;
  padding: 3px 6px;
}
.app .btn-xs,
.app .btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 1.1rem;
}
.btn-default:hover,
.btn-default:active,
.btn-default.active,
.open .dropdown-toggle.btn-default {
  color: #04559c;
  border-color: #04559c;
  background-color: #f5f5f5;
}
.app .btn-primary {
  background-color: #033a6a;
  border-color: #033a6a;
}
.app .btn-primary:hover,
.app .btn-primary:active,
.app .btn-primary.active,
.open .dropdown-toggle.app .btn-primary {
  background-color: #04559c;
  border-color: #04559c;
}
.btn-link {
  font-weight: normal;
  color: #033a6a;
  cursor: pointer;
  box-shadow: none;
}
.btn-link:focus,
.btn-link:hover,
.btn-link:active,
.btn-link.active {
  text-decoration: underline;
  color: #033a6a;
  box-shadow: none;
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  pointer-events: none;
  text-decoration: none;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-radius: 0;
}
.btn-group.open .dropdown-toggle {
  box-shadow: none;
}
.btn-group > .btn {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-group .btn-info {
  color: #4a8ba4;
  background-color: #fff;
  border-color: #4a8ba4;
}
.btn-group .btn-info.active {
  color: #fff;
  background-color: #4a8ba4;
  border-color: #4a8ba4;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-toolbar {
  margin-top: 15px;
  margin-bottom: 15px;
}
table {
  border-collapse: separate;
  word-break: normal;
}
.table {
  border-collapse: collapse;
  color: #041e42;
}
.table thead > tr > td,
.table tbody > tr > td,
.table tfoot > tr > td,
.table thead > tr > th,
.table tbody > tr > th,
.table tfoot > tr > th {
  padding: 25px;
}
.table thead {
  background-color: #041e42;
  color: #fff;
}
.table thead > tr > th {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid transparent;
}
.table thead > tr > th input,
.table thead > tr > th select,
.table thead > tr > th input.form-control,
.table thead > tr > th select.form-control {
  font-weight: normal;
  font-family: 'Scania Sans';
}
.table thead > tr > th input::placeholder,
.table thead > tr > th select::placeholder,
.table thead > tr > th input.form-control::placeholder,
.table thead > tr > th select.form-control::placeholder,
.table thead > tr > th input::-webkit-input-placeholder,
.table thead > tr > th select::-webkit-input-placeholder,
.table thead > tr > th input.form-control::-webkit-input-placeholder,
.table thead > tr > th select.form-control::-webkit-input-placeholder,
.table thead > tr > th input::-moz-placeholder,
.table thead > tr > th select::-moz-placeholder,
.table thead > tr > th input.form-control::-moz-placeholder,
.table thead > tr > th select.form-control::-moz-placeholder,
.table thead > tr > th input:-ms-input-placeholder,
.table thead > tr > th select:-ms-input-placeholder,
.table thead > tr > th input.form-control:-ms-input-placeholder,
.table thead > tr > th select.form-control:-ms-input-placeholder,
.table thead > tr > th input:moz-placeholder,
.table thead > tr > th select:moz-placeholder,
.table thead > tr > th input.form-control:moz-placeholder,
.table thead > tr > th select.form-control:moz-placeholder {
  font-weight: normal;
  font-family: 'Scania Sans';
}
.table tbody > tr > td {
  color: #53565a;
  vertical-align: middle;
}
.table tbody > tr > td ul {
  margin: unset;
}
.table caption,
.app .table caption {
  text-align: left;
  text-transform: uppercase;
  border: 0;
  line-height: normal;
  background-color: #041e42;
  color: #fff;
  padding: 25px;
}
.table caption + thead,
.app .table caption + thead {
  background-color: inherit;
  color: inherit;
}
.table caption + thead > tr > th,
.app .table caption + thead > tr > th {
  border: 1px solid #dadada;
}
.table i {
  white-space: nowrap;
}
.table h1,
.table h2,
.table h3,
.table h4,
.table h5,
.table h6 {
  border-bottom: 0;
  padding: 0;
  margin: 0;
  text-transform: none;
}
.table > tbody > tr.danger > td,
.table.table-striped > tbody > tr.danger > td,
.table > tbody > tr.active.danger > td,
.table.table-striped > tbody > tr.active.danger > td {
  background-color: rgba(204, 16, 64, 0.12);
}
.table > tbody > tr.success > td,
.table.table-striped > tbody > tr.success > td,
.table > tbody > tr.active.success > td,
.table.table-striped > tbody > tr.active.success > td {
  background-color: rgba(68, 168, 120, 0.12);
}
.table-responsive {
  overflow-x: auto;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr.active:hover > td,
.table-hover > tbody > tr:hover > th,
.table-hover > tbody > tr.active:hover > th {
  background-color: #d9e8ef;
}
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #ebf2f5;
}
.well .table-striped > tbody > tr:nth-child(odd) > td,
.well .table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #fdfdfd;
}
.app .table thead > tr > th,
.app .table tbody > tr > th,
.app .table tfoot > tr > th,
.app .table thead > tr > td,
.app .table tbody > tr > td,
.app .table tfoot > tr > td {
  padding: 10px;
}
.app .table caption {
  padding: 10px;
}
.app .table-sm {
  max-width: 100%;
  margin: 20px 0;
}
.app .table-sm > thead {
  background-color: transparent;
  color: #b7b7b7;
}
.app .table-sm > thead > tr > th {
  text-transform: none;
  font-weight: normal;
  font-family: 'Scania Sans Condensed Bold';
  font-size: 1.2rem;
  padding: 0 10px;
  border-bottom: 1px solid #b7b7b7;
}
.app .table-sm > tbody > tr > td {
  font-family: 'Scania Sans Condensed';
  padding: 5px 10px;
  border: none;
  font-size: 1.2rem;
}
.app .table-condensed {
  font-family: 'Scania Sans Condensed';
}
.app .table-condensed > tbody > tr > td {
  padding-top: 8px;
  padding-bottom: 5px;
}
.pagination {
  border-radius: 0;
  background-color: #fff;
}
.pagination-light {
  background-color: transparent;
}
.pagination-light > li > span,
.pagination-light > .active > span,
.pagination-light > li > a,
.pagination-light > .active > a,
.pagination-light > li > a:focus,
.pagination-light > .active > a:focus {
  color: inherit;
  background-color: transparent;
  border: 0;
  padding: 0px 6px;
  font-weight: normal;
}
.pagination-light > li > span:hover,
.pagination-light > .active > span:hover,
.pagination-light > li > a:hover,
.pagination-light > .active > a:hover,
.pagination-light > li > a:focus:hover,
.pagination-light > .active > a:focus:hover {
  background-color: transparent;
  color: inherit;
}
.pagination-light > .active > span {
  background-color: transparent;
  font-weight: bold;
  border-bottom: 1px solid #fff;
  padding: 0;
  margin: 0 10px;
}
.pagination > li > a,
.pagination > li > span,
.pagination > li > a:hover,
.pagination > li > a:focus,
.pagination > li > span:hover,
.pagination > li > span:focus {
  color: #041e42;
  background-color: transparent;
  border-color: transparent;
}
.pagination > li.active > a,
.pagination > li.active > span,
.pagination > li.active > a:hover,
.pagination > li.active > a:focus,
.pagination > li.active > span:hover,
.pagination > li.active > span:focus {
  color: #041e42;
  background-color: transparent;
  border-color: transparent;
  text-decoration: underline;
}
.pagination > li > a > strong {
  color: inherit;
}
.pagination > li > a,
.pagination > li > span {
  padding: 6px;
  line-height: 1.42857143;
  color: #97999B;
  text-decoration: none;
  background-color: transparent;
  border: none;
}
.pagination > li > a > i,
.pagination > li > span > i {
  color: inherit;
}
.pagination > li > a > strong,
.pagination > li > span > strong {
  font-family: "Scania Sans";
  color: inherit;
}
.badge {
  cursor: default;
}
.label {
  margin-bottom: 1px;
  font-size: 80%;
  font-weight: bold;
  border-radius: 1em;
  padding: .6em 1.9em .7em;
  display: inline-block;
}
.label-xs {
  font-size: 70%;
  font-weight: normal;
  border-radius: 0.35em;
  padding: 0.28em 0.4em 0.25em;
}
.label-sm {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  font-size: 90%;
  border-radius: 1em;
  padding: 0.4em 0.6em;
}
.label-lg {
  font-size: 100%;
  font-weight: bold;
  border-radius: 1.3em;
  padding: 0.6em 1.2em 0.6em;
}
.label-default {
  background-color: #fff;
  color: #04559c;
  border: 1px solid #04559c;
}
.label-primary {
  background-color: #073472;
  color: #fff;
  border: 1px solid #073472;
}
.label-danger {
  background-color: #ee2156;
  color: #fff;
  border: 1px solid #ee2156;
}
.label-info {
  background-color: #67a3ba;
  color: #fff;
  border: 1px solid #67a3ba;
}
.label-success {
  background-color: #60bf91;
  color: #fff;
  border: 1px solid #60bf91;
}
.label-warning {
  background-color: #f6a98e;
  color: #fff;
  border: 1px solid #f6a98e;
}
.label.disabled,
.disabled .label {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=50);
  -moz-opacity: 0.5;
  -khtml-opacity: 0.5;
  opacity: 0.5;
}
.badge-primary {
  background-color: #041e42;
}
.badge-success {
  background-color: #44a878;
}
.badge-info {
  background-color: #4a8ba4;
}
.badge-warning {
  background-color: #f2855f;
}
.badge-danger {
  background-color: #cc1040;
}
.dropdown-menu {
  text-align: left;
  font-size: 14px;
}
.dropdown-menu > li a {
  font-family: inherit;
}
.progress-bar {
  background-color: #041e42;
}
.progress-bar-primary {
  background-color: #041e42;
}
.progress-bar-success {
  background-color: #44a878;
}
.progress-bar-info {
  background-color: #4a8ba4;
}
.progress-bar-warning {
  background-color: #f2855f;
}
.progress-bar-danger {
  background-color: #cc1040;
}
html {
  font-size: 62.5%;
}
body {
  font-family: "Scania Sans", Helvetica, Arial, sans-serif;
  line-height: 1.428571429;
  color: #53565a;
  font-size: 1.8rem;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
.public h1,
.app .public h1,
.public h2,
.app .public h2,
.public h3,
.app .public h3,
.public h4,
.app .public h4,
.public h5,
.app .public h5,
.public h6,
.app .public h6,
.portlet-application h1,
.portlet-application h2,
.portlet-application h3,
.portlet-application h4,
.portlet-application h5,
.portlet-application h6 {
  font-family: "Scania Sans Headline";
  font-weight: bold;
  line-height: 1.15;
  color: #041e42;
  text-align: center;
}
h1,
.public h1,
.app .public h1,
.portlet-application h1 {
  font-size: 9rem;
  line-height: 0.98;
}
h2,
.public h2,
.app .public h2,
.portlet-application h2 {
  font-size: 6rem;
  line-height: 1.05;
}
h3,
.public h3,
.app .public h3,
.portlet-application h3 {
  font-size: 3.5rem;
}
h4,
.public h4,
.app .public h4,
.portlet-application h4 {
  font-size: 2.4rem;
}
h5,
.public h5,
.app .public h5,
.portlet-application h5 {
  font-family: "Scania Sans";
  font-weight: bold;
  font-size: 1.8rem;
}
h6,
.public h6,
.app .public h6,
.portlet-application h6 {
  font-family: "Scania Sans";
  font-style: italic;
  font-size: 1.8rem;
}
td,
th {
  font-size: 1.8rem;
}
p,
.public p,
.app .public p,
.portlet-application p {
  text-align: center;
}
a,
a:hover,
a:active {
  color: #033a6a;
}
dt {
  font-weight: normal;
  font-size: 85%;
}
dd,
strong,
button {
  font-family: "Scania Sans";
  color: #041e42;
  font-weight: bold;
}
button {
  font-size: 0.9em;
}
label,
caption {
  font-family: "Scania Sans";
  font-weight: bold;
}
legend {
  font-family: "Scania Sans Headline";
  font-weight: bold;
}
blockquote {
  font-family: "Scania Sans";
  font-weight: bold;
}
pre {
  font-size: inherit;
}
.text-center {
  text-align: center !important;
}
.text-pale {
  color: #767676;
}
b.text-pale,
strong.text-pale {
  color: #949393;
}
article,
.app article {
  text-align: left;
  font-size: 1.8rem;
}
article h2,
article h3,
article h4,
article h5,
article h6,
.app article h2,
.app article h3,
.app article h4,
.app article h5,
.app article h6 {
  font-family: "Scania Sans";
  text-align: inherit;
  font-weight: bold;
  letter-spacing: normal;
}
article h1,
.app article h1 {
  font-size: 4.5rem;
  text-align: inherit;
  letter-spacing: normal;
}
article h2,
.app article h2 {
  font-size: 3rem;
  letter-spacing: -0.1rem;
}
article h3,
.app article h3 {
  font-size: 2.6rem;
}
article h4,
.app article h4 {
  font-size: 2.3rem;
}
article h5,
.app article h5 {
  font-size: 2rem;
}
article h6,
.app article h6 {
  font-size: 1.8rem;
}
article p,
.app article p {
  text-align: inherit;
  font-size: inherit;
}
article p a {
  font-family: 'Scania Sans';
  font-weight: bold;
}
.app body,
body.app {
  font-size: 1.4rem;
  font-family: 'Scania Sans Semi Condensed', 'Scania Sans Condensed', 'Scania Sans', Arial, Helvetica, sans-serif;
}
.app h1 {
  font-size: 2.2rem;
}
.app h2 {
  font-size: 2rem;
}
.app h3 {
  font-size: 1.8rem;
}
.app h4 {
  font-size: 1.6rem;
}
.app h5 {
  font-size: 1.4rem;
}
.app h6 {
  font-size: 1.4rem;
}
.app p {
  text-align: left;
  font-size: 1.4rem;
}
.app td,
.app th {
  font-size: 1.4rem;
}
.app.compact body,
body.app.compact {
  font-size: 1.26rem;
}
.app.compact h1 {
  font-size: 1.98rem;
}
.app.compact h2 {
  font-size: 1.8rem;
}
.app.compact h3 {
  font-size: 1.62rem;
}
.app.compact h4 {
  font-size: 1.44rem;
}
.app.compact h5 {
  font-size: 1.26rem;
}
.app.compact h6 {
  font-size: 1.26rem;
}
.app.compact p {
  text-align: left;
}
.app.compact td,
.app.compact th {
  font-size: 1.204rem;
}
.app h2,
.app h3,
.app h4,
.app h5,
.app h6,
.app legend {
  font-family: "Scania Sans Condensed";
  font-weight: bold;
  text-align: left;
}
.app h1,
.app h2,
.app h3 {
  letter-spacing: 0.03rem;
  text-align: left;
}
.app label,
.app caption {
  font-family: "Scania Sans Condensed";
  font-weight: bold;
  color: #949393;
}
.app label dd,
.app caption dd,
.app label strong,
.app caption strong,
.app label button,
.app caption button {
  font-family: "Scania Sans Semi Condensed";
  font-weight: bold;
  color: #041e42;
}
.app label blockquote,
.app caption blockquote {
  font-family: "Scania Sans Semi Condensed";
  font-weight: bold;
}
.app label p a,
.app caption p a {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: bold;
}
.app label p,
.app caption p {
  text-align: left;
}
.app article h1 {
  font-family: "Scania Sans Headline";
  font-weight: bold;
}
nav a {
  font-family: "Scania Sans";
  font-weight: bold;
  text-transform: uppercase;
}
.text-muted {
  color: #949494;
}
.breadcrumbs {
  font-family: "Scania Sans";
}
article p.lead,
p.lead,
.app p.lead {
  font-family: 'Scania Sans';
  font-weight: bold;
  font-size: 1.26em;
  color: #041e42;
  font-weight: normal;
  line-height: 1.4;
}
address {
  font-size: 1.2rem;
}
address h4 {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  font-size: 1.8rem;
  color: #53565A;
  margin-bottom: 1px;
}
address h4:first-child {
  margin-top: 20px;
}
@media (max-width: 768px) {
  .app article h1 {
    font-size: 2.8rem;
  }
  h1,
  .public h1,
  .app .public h1,
  .portlet-application h1 {
    font-size: 3.6rem;
  }
  h2,
  .public h2,
  .app .public h2,
  .portlet-application h2 {
    font-size: 3rem;
  }
  h3,
  .public h3,
  .app .public h3,
  .portlet-application h3 {
    font-size: 1.75rem;
  }
  p,
  .public p,
  .app .public p,
  .portlet-application p {
    font-size: 1.8rem;
  }
}
.input-group {
  border-radius: 0px;
  box-shadow: none;
  border-color: transparent;
}
.input-group .input-group-addon {
  border-radius: 0px;
  box-shadow: none;
  border-color: transparent;
  padding: 4px 18px;
  font-size: 22px;
  margin-right: 3px;
  border-left: 3px solid #fff;
}
.input-group .input-group-addon:first-child {
  border-left: 0;
}
.input-group .input-group-addon:not(:last-child) {
  border-right: 3px solid #fff;
}
.input-group .input-group-addon input[type="radio"] {
  margin-top: 10px;
  margin-right: -15px;
}
.input-group .input-group-addon input[type="radio"] + span {
  line-height: 0;
  margin-bottom: 8px;
}
.input-group .input-group-addon input[type="radio"] + span:before {
  border: 0.2em solid #eee;
  vertical-align: inherit;
}
.input-group .input-group-addon input[type="checkbox"] {
  margin-right: -35px;
  height: 30px;
  width: 30px;
}
.app .input-group .input-group-addon input[type="checkbox"] {
  margin-right: -25px;
  height: 20px;
  width: 20px;
}
.input-group .input-group-addon input[type="checkbox"] + span:before {
  margin: 0px;
}
.app .input-group .input-group-addon {
  padding: 0px 15px;
  font-size: 17px;
}
.input-group > .form-control {
  padding: 20px 17px;
  border-radius: 0px;
  border: 1px solid transparent;
}
.app .input-group > .form-control {
  padding: 8.4px 17px;
}
.input-group-lg .input-group-addon {
  border-radius: 0px;
  box-shadow: none;
  border-color: transparent;
  padding: 0px 25px;
  font-size: 28px;
}
.app .input-group-lg .input-group-addon {
  padding: 0px 15px;
  font-size: 20px;
}
.input-group-lg > .form-control {
  padding: 40px 17px;
}
.app .input-group-lg > .form-control {
  padding: 23px 17px;
}
.input-group-sm .input-group-addon {
  padding-top: 2px;
  padding-bottom: 2px;
  height: auto;
}
.app .input-group-sm .input-group-addon {
  padding: 0px 7px;
  font-size: 12px;
}
.input-group-sm > .form-control {
  padding: 20px 17px;
}
.app .input-group-sm > .form-control {
  padding: 5px 17px;
}
.input-group .input-group-btn {
  z-index: 2;
}
.input-group .input-group-btn:first-child > .btn-default:first-child {
  margin-left: 0px;
}
.input-group .input-group-btn:not(:last-child) {
  padding-right: 4px;
}
.input-group .input-group-btn > .btn-default {
  border-color: transparent;
  background-color: #f5f5f5;
  margin-left: 3px;
  padding: 25px 15px 15px 15px;
}
.app .input-group .input-group-btn > .btn-default {
  padding: 14px 10px 10px 10px;
}
.well .input-group .input-group-btn .btn-default {
  background-color: #fff;
  margin-left: 3px;
}
.input-group .input-group-btn .dropdown-toggle {
  white-space: nowrap;
}
[class^="icon-"],
[class*=" icon-"],
.breadcrumb > li + li:before,
.notification-container .notification .notification-inner:before,
.table tbody tr.row-selectable > td:first-child:before,
.table-selectable > tbody > tr.expandable > td:first-child:before,
.table-calculation > tbody tr.selectable > td:first-child:before,
.table-calculation td.configurable:before,
.notification-container .notification .notification-inner:before,
.loading:after,
.locked:after {
  font-family: 'corporate-icons';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  /*line-height: 1;*/
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-stack .icon-stack-base {
  margin-left: 0.1em;
  /* Why is this needed... */
}
.icon-required-field {
  color: #e2e2e2;
}
.icon-team-room:before {
  content: "\e62b";
}
.icon-operational-analysis:before {
  content: "\e654";
}
.icon-sail:before {
  content: "\e785";
}
.icon-factory:before {
  content: "\e778";
}
.icon-wrench-cog:before {
  content: "\e65f";
}
.icon-truck-alt-122:before {
  content: "\e771";
}
.icon-screw:before {
  content: "\e772";
}
.icon-power-cord:before {
  content: "\e773";
}
.icon-microscope:before {
  content: "\e774";
}
.icon-iso:before {
  content: "\e775";
}
.icon-engine:before {
  content: "\e776";
}
.icon-truck-alt-12:before {
  content: "\e779";
}
.icon-bus:before {
  content: "\e777";
}
.icon-bus-alt-1:before {
  content: "\e77a";
}
.icon-pdf:before {
  content: "\e77b";
}
.icon-truck-scania:before {
  content: "\e77e";
}
.icon-cake:before {
  content: "\e77d";
}
.icon-bus-scania:before {
  content: "\e77f";
}
.icon-truck-cabin:before {
  content: "\e780";
}
.icon-bus-front:before {
  content: "\e781";
}
.icon-baby:before {
  content: "\e77c";
}
.icon-welding-mask:before {
  content: "\e770";
}
.icon-space-shuttle:before {
  content: "\f197";
}
.icon-slack:before {
  content: "\f198";
}
.icon-envelope-square:before {
  content: "\f199";
}
.icon-wordpress:before {
  content: "\f19a";
}
.icon-openid:before {
  content: "\f19b";
}
.icon-university:before {
  content: "\f19c";
}
.icon-graduation-cap:before {
  content: "\f19d";
}
.icon-yahoo:before {
  content: "\f19e";
}
.icon-google:before {
  content: "\f1a0";
}
.icon-reddit:before {
  content: "\f1a1";
}
.icon-reddit-square:before {
  content: "\f1a2";
}
.icon-stumbleupon-circle:before {
  content: "\f1a3";
}
.icon-stumbleupon:before {
  content: "\f1a4";
}
.icon-delicious:before {
  content: "\f1a5";
}
.icon-digg:before {
  content: "\f1a6";
}
.icon-pied-piper:before {
  content: "\f1a7";
}
.icon-pied-piper-alt:before {
  content: "\f1a8";
}
.icon-drupal:before {
  content: "\f1a9";
}
.icon-joomla:before {
  content: "\f1aa";
}
.icon-language:before {
  content: "\f1ab";
}
.icon-fax:before {
  content: "\f1ac";
}
.icon-building2:before {
  content: "\f1ad";
}
.icon-child:before {
  content: "\f1ae";
}
.icon-paw:before {
  content: "\f1b0";
}
.icon-spoon:before {
  content: "\f1b1";
}
.icon-cube:before {
  content: "\f1b2";
}
.icon-cubes:before {
  content: "\f1b3";
}
.icon-behance:before {
  content: "\f1b4";
}
.icon-behance-square:before {
  content: "\f1b5";
}
.icon-steam:before {
  content: "\f1b6";
}
.icon-steam-square:before {
  content: "\f1b7";
}
.icon-recycle:before {
  content: "\f1b8";
}
.icon-car:before {
  content: "\f1b9";
}
.icon-uniF1BA:before {
  content: "\f1ba";
}
.icon-tree:before {
  content: "\f1bb";
}
.icon-spotify:before {
  content: "\f1bc";
}
.icon-deviantart:before {
  content: "\f1bd";
}
.icon-soundcloud:before {
  content: "\f1be";
}
.icon-database:before {
  content: "\f1c0";
}
.icon-file-pdf-o:before {
  content: "\f1c1";
}
.icon-file-word-o:before {
  content: "\f1c2";
}
.icon-file-excel-o:before {
  content: "\f1c3";
}
.icon-file-powerpoint-o:before {
  content: "\f1c4";
}
.icon-file-image-o:before {
  content: "\f1c5";
}
.icon-file-archive-o:before {
  content: "\f1c6";
}
.icon-file-audio-o:before {
  content: "\f1c7";
}
.icon-file-video-o:before {
  content: "\f1c8";
}
.icon-file-code-o:before {
  content: "\f1c9";
}
.icon-vine:before {
  content: "\f1ca";
}
.icon-codepen:before {
  content: "\f1cb";
}
.icon-jsfiddle:before {
  content: "\f1cc";
}
.icon-life-ring:before {
  content: "\f1cd";
}
.icon-circle-o-notch:before {
  content: "\f1ce";
}
.icon-rebel:before {
  content: "\f1d0";
}
.icon-empire:before {
  content: "\f1d1";
}
.icon-git-square:before {
  content: "\f1d2";
}
.icon-git:before {
  content: "\f1d3";
}
.icon-hacker-news:before {
  content: "\f1d4";
}
.icon-tencent-weibo:before {
  content: "\f1d5";
}
.icon-qq:before {
  content: "\f1d6";
}
.icon-weixin:before {
  content: "\f1d7";
}
.icon-paper-plane:before {
  content: "\f1d8";
}
.icon-paper-plane-o:before {
  content: "\f1d9";
}
.icon-history:before {
  content: "\f1da";
}
.icon-circle-thin:before {
  content: "\f1db";
}
.icon-header:before {
  content: "\f1dc";
}
.icon-paragraph:before {
  content: "\f1dd";
}
.icon-sliders:before {
  content: "\f1de";
}
.icon-share-alt2:before {
  content: "\f1e0";
}
.icon-share-alt-square:before {
  content: "\f1e1";
}
.icon-bomb:before {
  content: "\f1e2";
}
.icon-glass:before {
  content: "\e600";
}
.icon-music:before {
  content: "\e601";
}
.icon-search:before {
  content: "\e602";
}
.icon-upload:before {
  content: "\e61a";
}
.icon-inbox:before {
  content: "\e61b";
}
.icon-play-circle:before {
  content: "\e61c";
}
.icon-refresh:before {
  content: "\e61e";
}
.icon-list-alt:before {
  content: "\e61f";
}
.icon-lock:before {
  content: "\e620";
}
.icon-flag:before {
  content: "\e621";
}
.icon-headphones:before {
  content: "\e622";
}
.icon-volume-off:before {
  content: "\e623";
}
.icon-volume-down:before {
  content: "\e624";
}
.icon-volume-up:before {
  content: "\e625";
}
.icon-qrcode:before {
  content: "\e626";
}
.icon-barcode:before {
  content: "\e627";
}
.icon-tag:before {
  content: "\e628";
}
.icon-tags:before {
  content: "\e629";
}
.icon-book:before {
  content: "\e62a";
}
.icon-bookmark:before {
  content: "\e62c";
}
.icon-print:before {
  content: "\e62d";
}
.icon-align-right:before {
  content: "\e635";
}
.icon-align-justify:before {
  content: "\e636";
}
.icon-list:before {
  content: "\e637";
}
.icon-indent-right:before {
  content: "\e638";
}
.icon-facetime-video:before {
  content: "\e63a";
}
.icon-picture:before {
  content: "\e63b";
}
.icon-pencil:before {
  content: "\e63c";
}
.icon-map-marker:before {
  content: "\e63d";
}
.icon-adjust:before {
  content: "\e63e";
}
.icon-tint:before {
  content: "\e63f";
}
.icon-edit:before {
  content: "\e640";
}
.icon-share:before {
  content: "\e641";
}
.icon-check:before {
  content: "\e642";
}
.icon-move:before {
  content: "\e643";
}
.icon-step-backward:before {
  content: "\e644";
}
.icon-fast-backward:before {
  content: "\e645";
}
.icon-backward:before {
  content: "\e646";
}
.icon-play:before {
  content: "\e647";
}
.icon-minus-sign:before {
  content: "\e651";
}
.icon-remove-sign:before {
  content: "\e652";
}
.icon-ok-sign:before {
  content: "\e653";
}
.icon-question-sign:before {
  content: "\e655";
}
.icon-info-sign:before {
  content: "\e656";
}
.icon-screenshot:before {
  content: "\e657";
}
.icon-remove-circle:before {
  content: "\e658";
}
.icon-ok-circle:before {
  content: "\e659";
}
.icon-arrow-left:before {
  content: "\e65a";
}
.icon-arrow-right:before {
  content: "\e65b";
}
.icon-arrow-up:before {
  content: "\e65c";
}
.icon-arrow-down:before {
  content: "\e65d";
}
.icon-resize-full:before {
  content: "\f065";
}
.icon-compress:before {
  content: "\f066";
}
.icon-resize-small:before {
  content: "\e660";
}
.icon-plus:before {
  content: "\e661";
}
.icon-warning-sign:before {
  content: "\e66a";
}
.icon-plane:before {
  content: "\e66b";
}
.icon-calendar:before {
  content: "\e66c";
}
.icon-random:before {
  content: "\e66d";
}
.icon-comment:before {
  content: "\e66e";
}
.icon-magnet:before {
  content: "\e66f";
}
.icon-chevron-up:before {
  content: "\e670";
}
.icon-chevron-down:before {
  content: "\e671";
}
.icon-retweet:before {
  content: "\e672";
}
.icon-shopping-cart:before {
  content: "\e673";
}
.icon-folder-close:before {
  content: "\e674";
}
.icon-folder-open:before {
  content: "\e675";
}
.icon-resize-horizontal:before {
  content: "\e676";
}
.icon-resize-vertical:before {
  content: "\e677";
}
.icon-bar-chart:before {
  content: "\e678";
}
.icon-twitter-sign:before {
  content: "\e679";
}
.icon-facebook-sign:before {
  content: "\e67a";
}
.icon-camera-retro:before {
  content: "\e67b";
}
.icon-key:before {
  content: "\e67c";
}
.icon-external-link:before {
  content: "\e686";
}
.icon-trophy:before {
  content: "\e688";
}
.icon-github-sign:before {
  content: "\e689";
}
.icon-lemon:before {
  content: "\e68b";
}
.icon-phone:before {
  content: "\e68c";
}
.icon-bookmark-empty:before {
  content: "\e68e";
}
.icon-phone-sign:before {
  content: "\e68f";
}
.icon-twitter:before {
  content: "\e690";
}
.icon-facebook:before {
  content: "\e691";
}
.icon-github:before {
  content: "\e692";
}
.icon-unlock:before {
  content: "\e693";
}
.icon-credit-card:before {
  content: "\e694";
}
.icon-rss:before {
  content: "\e695";
}
.icon-hdd:before {
  content: "\e696";
}
.icon-bullhorn:before {
  content: "\e697";
}
.icon-circle-arrow-up:before {
  content: "\e6a0";
}
.icon-circle-arrow-down:before {
  content: "\e6a1";
}
.icon-globe:before {
  content: "\e6a2";
}
.icon-wrench:before {
  content: "\e6a3";
}
.icon-tasks:before {
  content: "\e6a4";
}
.icon-filter:before {
  content: "\e6a5";
}
.icon-briefcase:before {
  content: "\e6a6";
}
.icon-arrows-alt:before {
  content: "\e6a7";
}
.icon-group:before {
  content: "\e6a8";
}
.icon-link:before {
  content: "\e6a9";
}
.icon-cloud:before {
  content: "\e6aa";
}
.icon-beaker:before {
  content: "\e6ab";
}
.icon-cut:before {
  content: "\e6ac";
}
.icon-copy:before {
  content: "\e6ad";
}
.icon-paper-clip:before {
  content: "\e6ae";
}
.icon-save:before {
  content: "\e6af";
}
.icon-sign-blank:before {
  content: "\e6b0";
}
.icon-reorder:before {
  content: "\e6b1";
}
.icon-pinterest-sign:before {
  content: "\e6ba";
}
.icon-google-plus-sign:before {
  content: "\e6bb";
}
.icon-google-plus:before {
  content: "\e6bc";
}
.icon-money:before {
  content: "\e6bd";
}
.icon-caret-down:before {
  content: "\e6be";
}
.icon-caret-up:before {
  content: "\e6bf";
}
.icon-caret-left:before {
  content: "\e6c0";
}
.icon-caret-right:before {
  content: "\e6c1";
}
.icon-columns:before {
  content: "\e6c2";
}
.icon-sort:before {
  content: "\e6c3";
}
.icon-sort-down:before {
  content: "\e6c4";
}
.icon-sort-up:before {
  content: "\e6c5";
}
.icon-envelope:before {
  content: "\e6c6";
}
.icon-linkedin:before {
  content: "\e6c7";
}
.icon-legal:before {
  content: "\e6c9";
}
.icon-dashboard:before {
  content: "\e6ca";
}
.icon-comment-alt:before {
  content: "\e6cb";
}
.icon-comments-alt:before {
  content: "\e6cc";
}
.icon-user-md:before {
  content: "\e6d5";
}
.icon-stethoscope:before {
  content: "\e6d6";
}
.icon-suitcase:before {
  content: "\e6d7";
}
.icon-bell-alt:before {
  content: "\e6d8";
}
.icon-coffee:before {
  content: "\e6d9";
}
.icon-file-text-alt:before {
  content: "\e6db";
}
.icon-building:before {
  content: "\e6dc";
}
.icon-hospital:before {
  content: "\e6dd";
}
.icon-ambulance:before {
  content: "\e6de";
}
.icon-medkit:before {
  content: "\e6df";
}
.icon-fighter-jet:before {
  content: "\e6e0";
}
.icon-beer:before {
  content: "\e6e1";
}
.icon-h-sign:before {
  content: "\e6e2";
}
.icon-plus-sign-alt:before {
  content: "\e6e3";
}
.icon-double-angle-left:before {
  content: "\e6e4";
}
.icon-double-angle-right:before {
  content: "\e6e5";
}
.icon-double-angle-up:before {
  content: "\e6e6";
}
.icon-double-angle-down:before {
  content: "\e6e7";
}
.icon-circle-blank:before {
  content: "\e6f0";
}
.icon-quote-left:before {
  content: "\e6f1";
}
.icon-quote-right:before {
  content: "\e6f2";
}
.icon-spinner:before {
  content: "\e6f3";
}
.icon-circle:before {
  content: "\e6f4";
}
.icon-reply:before {
  content: "\e6f5";
}
.icon-github-alt:before {
  content: "\e6f6";
}
.icon-folder-close-alt:before {
  content: "\e6f7";
}
.icon-folder-open-alt:before {
  content: "\e6f8";
}
.icon-smile:before {
  content: "\e6f9";
}
.icon-frown:before {
  content: "\e6fa";
}
.icon-meh:before {
  content: "\e6fb";
}
.icon-gamepad:before {
  content: "\e6fc";
}
.icon-keyboard:before {
  content: "\e6fd";
}
.icon-flag-alt:before {
  content: "\e6fe";
}
.icon-flag-checkered:before {
  content: "\e6ff";
}
.icon-terminal:before {
  content: "\e700";
}
.icon-code:before {
  content: "\e701";
}
.icon-mail-reply-all:before {
  content: "\e702";
}
.icon-superscript:before {
  content: "\e70b";
}
.icon-subscript:before {
  content: "\e70c";
}
.icon-eraser:before {
  content: "\e70d";
}
.icon-puzzle-piece:before {
  content: "\e70e";
}
.icon-microphone:before {
  content: "\e70f";
}
.icon-shield:before {
  content: "\e711";
}
.icon-calendar-empty:before {
  content: "\e712";
}
.icon-fire-extinguisher:before {
  content: "\e713";
}
.icon-rocket:before {
  content: "\e714";
}
.icon-maxcdn:before {
  content: "\e715";
}
.icon-chevron-sign-left:before {
  content: "\e716";
}
.icon-chevron-sign-right:before {
  content: "\e717";
}
.icon-chevron-sign-up:before {
  content: "\e718";
}
.icon-chevron-sign-down:before {
  content: "\e719";
}
.icon-html5:before {
  content: "\e71a";
}
.icon-css3:before {
  content: "\e71b";
}
.icon-anchor:before {
  content: "\e71c";
}
.icon-unlock-alt:before {
  content: "\e71d";
}
.icon-level-up:before {
  content: "\e726";
}
.icon-level-down:before {
  content: "\e727";
}
.icon-check-sign:before {
  content: "\e728";
}
.icon-edit-sign:before {
  content: "\e729";
}
.icon-external-link-sign:before {
  content: "\e72a";
}
.icon-share-sign:before {
  content: "\e72b";
}
.icon-compass:before {
  content: "\e72c";
}
.icon-collapse-top:before {
  content: "\e72e";
}
.icon-eur:before {
  content: "\e730";
}
.icon-gbp:before {
  content: "\e731";
}
.icon-dollar:before {
  content: "\e732";
}
.icon-inr:before {
  content: "\e733";
}
.icon-yen:before {
  content: "\e734";
}
.icon-ruble:before {
  content: "\e735";
}
.icon-krw:before {
  content: "\e736";
}
.icon-btc:before {
  content: "\e737";
}
.icon-file:before {
  content: "\e738";
}
.icon-thumbs-down:before {
  content: "\e741";
}
.icon-youtube-sign:before {
  content: "\e742";
}
.icon-youtube:before {
  content: "\e743";
}
.icon-xing:before {
  content: "\e744";
}
.icon-xing-sign:before {
  content: "\e745";
}
.icon-youtube-play:before {
  content: "\e746";
}
.icon-dropbox:before {
  content: "\e747";
}
.icon-instagram:before {
  content: "\e749";
}
.icon-flickr:before {
  content: "\e74a";
}
.icon-adn:before {
  content: "\e74b";
}
.icon-bitbucket:before {
  content: "\e74c";
}
.icon-bitbucket-sign:before {
  content: "\e74d";
}
.icon-tumblr:before {
  content: "\e74e";
}
.icon-tumblr-sign:before {
  content: "\e74f";
}
.icon-long-arrow-down:before {
  content: "\e750";
}
.icon-long-arrow-up:before {
  content: "\e751";
}
.icon-long-arrow-left:before {
  content: "\e752";
}
.icon-long-arrow-right:before {
  content: "\e753";
}
.icon-female:before {
  content: "\e75c";
}
.icon-male:before {
  content: "\e75d";
}
.icon-gittip:before {
  content: "\e75e";
}
.icon-sun:before {
  content: "\e75f";
}
.icon-moon:before {
  content: "\e760";
}
.icon-archive:before {
  content: "\e761";
}
.icon-bug:before {
  content: "\e762";
}
.icon-vk:before {
  content: "\e763";
}
.icon-weibo:before {
  content: "\e764";
}
.icon-renren:before {
  content: "\e765";
}
.icon-pagelines:before {
  content: "\e766";
}
.icon-stack-exchange2:before {
  content: "\e767";
}
.icon-arrow-circle-o-right:before {
  content: "\e768";
}
.icon-arrow-circle-o-left:before {
  content: "\e769";
}
.icon-toggle-left:before {
  content: "\e76a";
}
.icon-wheelchair:before {
  content: "\e76c";
}
.icon-vimeo-sign:before {
  content: "\e76d";
}
.icon-turkish-lira:before {
  content: "\e76e";
}
.icon-apple:before {
  content: "\e754";
}
.icon-trash:before {
  content: "\e613";
}
.icon-home:before {
  content: "\e614";
}
.icon-file-alt:before {
  content: "\e615";
}
.icon-time:before {
  content: "\e616";
}
.icon-road:before {
  content: "\e617";
}
.icon-font:before {
  content: "\e62e";
}
.icon-bold:before {
  content: "\e62f";
}
.icon-italic:before {
  content: "\e630";
}
.icon-text-height:before {
  content: "\e631";
}
.icon-text-width:before {
  content: "\e632";
}
.icon-align-left:before {
  content: "\e633";
}
.icon-align-center:before {
  content: "\e634";
}
.icon-stop:before {
  content: "\e649";
}
.icon-forward:before {
  content: "\e64a";
}
.icon-fast-forward:before {
  content: "\e64b";
}
.icon-step-forward:before {
  content: "\e64c";
}
.icon-eject:before {
  content: "\e64d";
}
.icon-chevron-left:before {
  content: "\e64e";
}
.icon-chevron-right:before {
  content: "\e64f";
}
.icon-asterisk:before {
  content: "\e663";
}
.icon-exclamation-sign:before {
  content: "\e664";
}
.icon-gift:before {
  content: "\e665";
}
.icon-leaf:before {
  content: "\e666";
}
.icon-fire:before {
  content: "\e667";
}
.icon-eye-open:before {
  content: "\e668";
}
.icon-eye-close:before {
  content: "\e669";
}
.icon-comments:before {
  content: "\e67e";
}
.icon-thumbs-up-alt:before {
  content: "\e67f";
}
.icon-thumbs-down-alt:before {
  content: "\e680";
}
.icon-star-half:before {
  content: "\e681";
}
.icon-heart-empty:before {
  content: "\e682";
}
.icon-signout:before {
  content: "\e683";
}
.icon-linkedin-sign:before {
  content: "\e684";
}
.icon-certificate:before {
  content: "\e699";
}
.icon-hand-right:before {
  content: "\e69a";
}
.icon-hand-left:before {
  content: "\e69b";
}
.icon-hand-up:before {
  content: "\e69c";
}
.icon-hand-down:before {
  content: "\e69d";
}
.icon-circle-arrow-left:before {
  content: "\e69e";
}
.icon-circle-arrow-right:before {
  content: "\e69f";
}
.icon-list-ol:before {
  content: "\e6b3";
}
.icon-strikethrough:before {
  content: "\e6b4";
}
.icon-underline:before {
  content: "\e6b5";
}
.icon-table:before {
  content: "\e6b6";
}
.icon-magic:before {
  content: "\e6b7";
}
.icon-truck:before {
  content: "\e6b8";
}
.icon-pinterest:before {
  content: "\e6b9";
}
.icon-sitemap:before {
  content: "\e6ce";
}
.icon-umbrella:before {
  content: "\e6cf";
}
.icon-paste:before {
  content: "\e6d0";
}
.icon-lightbulb:before {
  content: "\e6d1";
}
.icon-exchange:before {
  content: "\e6d2";
}
.icon-cloud-download:before {
  content: "\e6d3";
}
.icon-cloud-upload:before {
  content: "\e6d4";
}
.icon-angle-right:before {
  content: "\e6e9";
}
.icon-desktop:before {
  content: "\e6ec";
}
.icon-laptop:before {
  content: "\e6ed";
}
.icon-tablet:before {
  content: "\e6ee";
}
.icon-mobile-phone:before {
  content: "\e6ef";
}
.icon-location-arrow:before {
  content: "\e704";
}
.icon-crop:before {
  content: "\e705";
}
.icon-code-fork:before {
  content: "\e706";
}
.icon-unlink:before {
  content: "\e707";
}
.icon-question:before {
  content: "\e708";
}
.icon-info:before {
  content: "\e709";
}
.icon-exclamation:before {
  content: "\e70a";
}
.icon-ellipsis-horizontal:before {
  content: "\e71f";
}
.icon-ellipsis-vertical:before {
  content: "\e720";
}
.icon-rss-sign:before {
  content: "\e721";
}
.icon-ticket:before {
  content: "\e723";
}
.icon-minus-sign-alt:before {
  content: "\e724";
}
.icon-collapse-alt:before {
  content: "\e725";
}
.icon-sort-by-alphabet:before {
  content: "\e73a";
}
.icon-sort-by-alphabet-alt:before {
  content: "\e73b";
}
.icon-sort-by-attributes:before {
  content: "\e73c";
}
.icon-sort-by-attributes-alt:before {
  content: "\e73d";
}
.icon-sort-by-order:before {
  content: "\e73e";
}
.icon-sort-by-order-alt:before {
  content: "\e73f";
}
.icon-thumbs-up:before {
  content: "\e740";
}
.icon-windows:before {
  content: "\e755";
}
.icon-android:before {
  content: "\e756";
}
.icon-linux:before {
  content: "\e757";
}
.icon-dribbble:before {
  content: "\e758";
}
.icon-skype:before {
  content: "\e759";
}
.icon-foursquare:before {
  content: "\e75a";
}
.icon-gear:before {
  content: "\e612";
}
.icon-envelope-alt:before {
  content: "\e603";
}
.icon-heart:before {
  content: "\e604";
}
.icon-star:before {
  content: "\e605";
}
.icon-user:before {
  content: "\e607";
}
.icon-film:before {
  content: "\e608";
}
.icon-th-large:before {
  content: "\e609";
}
.icon-th:before {
  content: "\e60a";
}
.icon-th-list:before {
  content: "\e60b";
}
.icon-ok:before {
  content: "\e60c";
}
.icon-remove:before {
  content: "\e60d";
}
.icon-zoom-in:before {
  content: "\e60e";
}
.icon-zoom-out:before {
  content: "\e60f";
}
.icon-off:before {
  content: "\e610";
}
.icon-signal:before {
  content: "\e611";
}
.icon-cog:before {
  content: "\f013";
}
.icon-star-empty:before {
  content: "\e606";
}
.icon-camera:before {
  content: "\e639";
}
.icon-pause:before {
  content: "\e648";
}
.icon-minus:before {
  content: "\e662";
}
.icon-cogs:before {
  content: "\e67d";
}
.icon-bell:before {
  content: "\e698";
}
.icon-list-ul:before {
  content: "\e6b2";
}
.icon-bolt:before {
  content: "\e6cd";
}
.icon-angle-left:before {
  content: "\e6e8";
}
.icon-star-half-empty:before {
  content: "\e703";
}
.icon-bullseye:before {
  content: "\e71e";
}
.icon-file-text:before {
  content: "\e739";
}
.icon-trello:before {
  content: "\e75b";
}
.icon-collapse:before {
  content: "\e72d";
}
.icon-gears:before {
  content: "\f085";
}
.icon-download-alt:before {
  content: "\e618";
}
.icon-lost:before {
  content: "\e76b";
}
.icon-paperclip:before {
  content: "\f0c6";
}
.icon-repeat:before {
  content: "\e61d";
}
.icon-rotate-right:before {
  content: "\f01e";
}
.icon-undo:before {
  content: "\e6c8";
}
.icon-rotate-left:before {
  content: "\f0e2";
}
.icon-check-minus:before {
  content: "\f147";
}
.icon-fullscreen:before {
  content: "\f0b2";
}
.icon-ban-circle:before {
  content: "\e65e";
}
.icon-reply-all:before {
  content: "\f122";
}
.icon-food:before {
  content: "\e6da";
}
.icon-euro:before {
  content: "\f153";
}
.icon-usd:before {
  content: "\f155";
}
.icon-rupee:before {
  content: "\f156";
}
.icon-jpy:before {
  content: "\f157";
}
.icon-bitcoin:before {
  content: "\f15a";
}
.icon-won:before {
  content: "\f159";
}
.icon-stackexchange:before {
  content: "\e748";
}
.icon-plus-sign:before {
  content: "\e650";
}
.icon-signin:before {
  content: "\e687";
}
.icon-mail-reply:before {
  content: "\f112";
}
.icon-pushpin:before {
  content: "\e685";
}
.icon-star-half-full:before {
  content: "\f123";
}
.icon-check-empty:before {
  content: "\e68d";
}
.icon-unchecked:before {
  content: "\f096";
}
.icon-power-off:before {
  content: "\f011";
}
.icon-mail-forward:before {
  content: "\e68a";
}
.icon-share-alt:before {
  content: "\f064";
}
.icon-microphone-off:before {
  content: "\e710";
}
.icon-download:before {
  content: "\e619";
}
.icon-indent-left:before {
  content: "\e783";
}
.icon-upload-alt2:before {
  content: "\e782";
}
.icon-upload-alt:before {
  content: "\e722";
}
.icon-expand-alt:before {
  content: "\e76f";
}
.icon-play-sign:before {
  content: "\e6ea";
}
.icon-cny:before {
  content: "\e6eb";
}
.icon-angle-up:before {
  content: "\e72f";
}
.icon-angle-down:before {
  content: "\e784";
}
.icon-renminbi:before {
  content: "\e786";
}
.icon-expand:before {
  content: "\e787";
}
.navbar-default {
  font-family: 'Scania Sans';
  background-color: #fff;
  margin-bottom: 0;
  border: 0;
  border-radius: 0;
  z-index: 1000;
  font-size: 1.4rem;
  min-height: auto;
}
.navbar-default > .container-fluid {
  padding-left: 0;
  padding-right: 0;
}
.navbar-default .navbar-header {
  float: none;
  display: block;
  font-family: 'Scania Sans Headline';
  padding: 12px 15px 3px;
  border-bottom: 1px solid #e2e2e2;
  font-size: 1.8rem;
}
.navbar-default .navbar-header .navbar-brand {
  float: none;
  display: inline-block;
  vertical-align: middle;
  height: auto;
  font-size: 0;
  padding: 0;
  margin: 20px 30px 20px 15px;
}
.navbar-default .navbar-header .navbar-brand:before {
  display: inline-block;
  content: "";
  background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark.png');
  background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark.svg');
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;
  width: 170px;
  height: 28px;
}
.navbar-default .navbar-header .navbar-brand:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  border-left: 1px solid #e2e2e2;
  margin: 0 -20px 0 15px;
  height: 20px;
  cursor: default;
}
.navbar-default .navbar-header .navbar-symbol {
  width: 48px;
  height: 46px;
  float: right;
  margin-right: 10px;
  margin-left: 45px;
  margin-top: 9px;
}
.navbar-default .navbar-header .navbar-symbol:before {
  display: inline-block;
  content: "";
  background-image: url('https://static.scania.com/resources/logotype/scania/scania-symbol.png');
  background-image: url('https://static.scania.com/resources/logotype/scania/scania-symbol.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: inherit;
  height: inherit;
}
.navbar-default .navbar-header .navbar-nav {
  margin: 15px 0 0 -15px;
}
.navbar-default .navbar-header .navbar-nav a,
.navbar-default .navbar-header .navbar-nav span {
  font-family: "Scania Sans";
  font-weight: normal;
  font-size: 12px;
  color: #747472;
}
.navbar-default .navbar-header .navbar-nav a {
  padding: 15px;
}
.navbar-default .navbar-header .navbar-nav a:hover {
  color: inherit;
  text-decoration: underline;
}
.navbar-default .navbar-header + .navbar-collapse {
  padding: 0;
  font-family: 'Scania Sans Bold';
}
.navbar-default .navbar-header + .navbar-collapse .navbar-nav.navbar-right:last-child {
  margin-right: 0;
}
.navbar-default .navbar-header + .navbar-collapse .navbar-nav a {
  padding: 20px 0;
  white-space: nowrap;
  background-color: transparent;
}
.navbar-default .navbar-header + .navbar-collapse .navbar-nav a:before,
.navbar-default .navbar-header + .navbar-collapse .navbar-nav a:after {
  content: "";
  padding: 0 15px;
}
.app .navbar-default .navbar-header + .navbar-collapse .navbar-nav a {
  padding-top: 16px;
  padding-bottom: 16px;
}
.app .navbar-default .navbar-header + .navbar-collapse .navbar-nav a:first-child:before {
  padding-right: 0;
}
.navbar-default .navbar-header + .navbar-collapse .navbar-nav + li a:before {
  border-left: 1px solid #e2e2e2;
}
.navbar-default .navbar-header + .navbar-collapse + .navbar-collapse {
  font-family: 'Scania Sans';
  background-color: #f3f3f3;
  font-size: 1.5rem;
}
.navbar-default .navbar-header + .navbar-collapse + .navbar-collapse a {
  font-family: "Scania Sans";
  text-transform: none;
  position: relative;
}
.navbar-default .navbar-header + .navbar-collapse + .navbar-collapse a.active:after,
.navbar-default .navbar-header + .navbar-collapse + .navbar-collapse a:hover:after,
.navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li.active a:after {
  content: "";
  border-bottom: 2px solid #d6001c;
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: 15px;
  margin-bottom: -2px;
}
.app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse a {
  padding-top: 8px;
  padding-bottom: 8px;
}
.app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse a.active:after,
.app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse a:hover:after,
.app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li.active a:after {
  bottom: 8px;
}
.navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav:first-child {
  margin-left: 0;
}
.navbar-default .navbar-collapse {
  position: relative;
  border-bottom: 1px solid #d3d3d3;
}
.navbar-default .navbar-collapse a {
  text-decoration: none;
}
.navbar-default .navbar-collapse .active > a,
.navbar-default .navbar-collapse .active > a:hover,
.navbar-default .navbar-collapse .active > a:focus {
  background-color: transparent;
  color: #041e42;
}
.navbar-default .navbar-nav > li.active > a,
.navbar-default .navbar-nav > li.open > a {
  color: #041e42;
  background-color: transparent;
}
.navbar-default .navbar-nav > li.active > a:hover,
.navbar-default .navbar-nav > li.open > a:hover,
.navbar-default .navbar-nav > li.active > a:focus,
.navbar-default .navbar-nav > li.open > a:focus {
  color: #041e42;
  background-color: transparent;
}
.navbar-default .navbar-nav > li > a {
  color: #909090;
}
.navbar-default .navbar-nav > li > a:hover {
  color: #041e42;
}
.navbar-default .navbar-nav > li + li > a:before {
  border-left: 1px solid #e2e2e2;
}
.app .navbar-default .navbar-header {
  padding: 2px 0 0px;
}
.app .navbar-default .navbar-header + .navbar-collapse {
  font-family: 'Scania Sans Semi Condensed Bold';
}
.app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse {
  font-family: 'Scania Sans Semi Condensed';
  padding: 0;
}
.nav-tabs {
  font-size: 0;
  text-align: center;
  margin: 10px 20px 5px;
}
.app .nav-tabs {
  text-align: left;
  margin: 10px 20px 5px 0;
}
.nav-tabs > li {
  margin-bottom: 0;
  float: none;
  display: inline-block;
}
.nav-tabs > li > a {
  font-family: 'Scania Sans';
  font-weight: bold;
  padding: 10px 20px 9px 20px;
  -webkit-border-radius: 0;
  border-radius: 0;
  margin-right: 0;
  border-top: 1px solid #c8c9c7;
  border-right: 1px solid #c8c9c7;
  background-color: #fff;
  color: #53565a;
  font-size: 1.4rem;
  text-transform: uppercase;
}
.app .nav-tabs > li > a {
  font-family: 'Scania Sans Condensed' !important;
  font-weight: bold;
  padding: 8px 16px 7px 16px;
  text-transform: none;
}
.nav-tabs > li > a:hover {
  background-color: #f7f7f7;
  border-top: 1px solid #c8c9c7;
  border-right: 1px solid #c8c9c7;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  position: relative;
  color: #fff;
  background-color: #53565a;
  border-radius: 0;
  border-top: 1px solid #53565a;
  border-left: 1px solid #53565a;
}
.nav-tabs > li:first-child a,
.nav-tabs > li.active:first-child a {
  border-left: 1px solid #c8c9c7;
}
.nav-tabs > li.disabled a {
  color: #999;
  font-style: italic;
}
.nav-tabs-light {
  border-bottom: transparent;
}
.nav-tabs-light > li a,
.nav-tabs-light > li a:hover,
.nav-tabs-light > li:first-child a {
  font-family: 'Scania Sans';
  background-color: transparent;
  border-color: transparent;
  color: #041e42;
}
.nav-tabs-light > li.active a,
.nav-tabs-light > li.active a:hover,
.nav-tabs-light > li.active a:focus,
.nav-tabs-light > li.active:first-child a {
  font-family: 'Scania Sans';
  font-weight: bold;
  background-color: transparent;
  display: inline-block;
  color: inherit;
  padding: 0;
  margin: 15px 16px 13px;
  border-color: #d6001c;
  border-width: 0 0 2px;
}
.nav-tabs-light > li:first-child a {
  padding-left: 0;
}
.nav-tabs + .nav-tabs-light {
  margin-top: 5px;
  margin-bottom: 8px;
}
.panel-heading .nav-tabs {
  display: flex;
  margin: -10px -15px -11px;
}
.panel-heading .nav-tabs > li {
  flex: 1;
}
.nav-pills li.active > a,
.nav-pills li.active > a:hover,
.nav-pills li.active > a:focus {
  background-color: #4a8ba4;
  color: #fff;
}
.nav-pills li.active > a > .badge {
  color: #4a8ba4;
}
.nav-pills li > a {
  color: #4a8ba4;
}
.nav-pills > li > a {
  border-radius: 0;
}
.nav-pills > li > a > .badge {
  margin-left: 10px;
  vertical-align: top;
  line-height: 0.9;
}
ul.nav.nav-pills {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: bold;
  padding: 0;
  margin: 0;
}
ul.nav.nav-pills li {
  border: 1px solid #4a8ba4;
  background-color: #fff;
}
ul.nav.nav-pills li.active {
  background-color: #4a8ba4;
}
ul.nav.nav-pills li + li {
  margin-left: -1px;
  margin-bottom: 10px;
}
ul.nav.nav-pills.nav-stacked {
  font-size: 1.56rem;
  margin-bottom: 30px;
}
ul.nav.nav-pills.nav-stacked li {
  border-color: #e2e2e2;
}
ul.nav.nav-pills.nav-stacked li + li {
  margin-left: 0;
  margin-bottom: -1px;
}
ul.nav.nav-pills.nav-stacked > li + li {
  margin-top: 0;
  margin-left: 0;
}
ul.nav.nav-pills.nav-stacked > li.active > a {
  color: #fff;
}
ul.nav.nav-pills.nav-stacked > li > a {
  padding: 22px;
  color: #555;
}
ul.nav.nav-pills.nav-stacked li.active {
  border-color: #4a8ba4;
}
.app .nav-pills > li > a {
  font-size: 1.2rem;
}
.breadcrumb {
  padding: 10px 15px;
  margin-bottom: 0px;
}
.breadcrumb > .active {
  color: #999;
}
.breadcrumb > li + li:before {
  color: #aaa;
}
@media (max-width: 991px) {
  .navbar-default {
    font-size: 1.2rem;
  }
  .navbar-default .navbar-toggle,
  .app .navbar-default .navbar-toggle {
    display: block;
    float: left;
    margin: -18px 0 -19px -18px;
    padding: 24px 17px;
    border-radius: 0;
  }
  .navbar-default .navbar-toggle.collapsed:before,
  .app .navbar-default .navbar-toggle.collapsed:before {
    content: none;
  }
  .navbar-default .navbar-toggle.collapsed span,
  .app .navbar-default .navbar-toggle.collapsed span {
    display: block;
  }
  .navbar-default .navbar-toggle:before,
  .app .navbar-default .navbar-toggle:before {
    font-family: 'corporate-icons';
    content: "\e60d";
    line-height: 14px;
    height: 14px;
    width: 22px;
    display: block;
  }
  .navbar-default .navbar-toggle span,
  .app .navbar-default .navbar-toggle span {
    display: none;
  }
  .navbar-default .navbar-header,
  .app .navbar-default .navbar-header {
    padding: 18px;
    text-align: center;
  }
  .navbar-default .navbar-header + .navbar-collapse,
  .app .navbar-default .navbar-header + .navbar-collapse,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse {
    background-color: #f5f5f5;
    border-top: 0px;
    padding: 0;
    font-size: 1.2rem;
  }
  .navbar-default .navbar-header + .navbar-collapse.collapse,
  .app .navbar-default .navbar-header + .navbar-collapse.collapse,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse.collapse,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse.collapse {
    display: none !important;
  }
  .navbar-default .navbar-header + .navbar-collapse.collapse.in,
  .app .navbar-default .navbar-header + .navbar-collapse.collapse.in,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse.collapse.in,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse.collapse.in {
    display: block !important;
  }
  .navbar-default .navbar-header + .navbar-collapse.collapse.in + .navbar-collapse,
  .app .navbar-default .navbar-header + .navbar-collapse.collapse.in + .navbar-collapse,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse.collapse.in + .navbar-collapse,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse.collapse.in + .navbar-collapse {
    display: block !important;
  }
  .navbar-default .navbar-header + .navbar-collapse li,
  .app .navbar-default .navbar-header + .navbar-collapse li,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li {
    float: none;
  }
  .navbar-default .navbar-header + .navbar-collapse li.active:after,
  .app .navbar-default .navbar-header + .navbar-collapse li.active:after,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li.active:after,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li.active:after {
    content: "-";
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
    font-family: 'corporate-icons';
    content: "\e662";
  }
  .navbar-default .navbar-header + .navbar-collapse li.active a,
  .app .navbar-default .navbar-header + .navbar-collapse li.active a,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li.active a,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li.active a {
    border-left: 0;
  }
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse + .navbar-collapse,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse + .navbar-collapse {
    background-color: transparent;
  }
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse > .navbar-nav li a,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse > .navbar-nav li a,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse + .navbar-collapse > .navbar-nav li a,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse + .navbar-collapse > .navbar-nav li a {
    padding-left: 35px;
  }
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li.active:after,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse li.active:after,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse + .navbar-collapse li.active:after,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse + .navbar-collapse li.active:after {
    content: "";
  }
  .navbar-default .navbar-header + .navbar-collapse .navbar-nav a,
  .app .navbar-default .navbar-header + .navbar-collapse .navbar-nav a,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav a,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav a {
    padding: 10px 25px;
    margin-left: 0;
    border-bottom: 1px solid #e2e2e2;
  }
  .navbar-default .navbar-header + .navbar-collapse .navbar-nav a:hover,
  .app .navbar-default .navbar-header + .navbar-collapse .navbar-nav a:hover,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav a:hover,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav a:hover {
    text-decoration: none;
  }
  .navbar-default .navbar-header + .navbar-collapse .navbar-nav a:before,
  .app .navbar-default .navbar-header + .navbar-collapse .navbar-nav a:before,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav a:before,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav a:before,
  .navbar-default .navbar-header + .navbar-collapse .navbar-nav a:after,
  .app .navbar-default .navbar-header + .navbar-collapse .navbar-nav a:after,
  .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav a:after,
  .app .navbar-default .navbar-header + .navbar-collapse + .navbar-collapse .navbar-nav a:after {
    content: none !important;
  }
  .navbar-default .navbar-header .navbar-symbol,
  .app .navbar-default .navbar-header .navbar-symbol {
    width: 40px;
    height: 37px;
    margin: -5px;
  }
  .navbar-default .navbar-header .navbar-symbol:before,
  .app .navbar-default .navbar-header .navbar-symbol:before {
    position: static;
  }
  .navbar-default .navbar-header .navbar-brand,
  .app .navbar-default .navbar-header .navbar-brand,
  .navbar-default .navbar-header .navbar-nav,
  .app .navbar-default .navbar-header .navbar-nav {
    display: none;
  }
  .navbar-default .navbar-nav,
  .app .navbar-default .navbar-nav {
    float: none;
  }
}
@media (max-width: 767px) {
  .navbar-nav {
    margin: 0;
  }
  .navbar-nav > li > a {
    line-height: 18px;
    border-bottom: 1px solid #eee;
  }
  .navbar-nav > li.active > a {
    border-top: 0;
    border-left: 4px solid #7c1c1d;
    margin-top: 0px;
  }
}
.panel {
  margin-bottom: 15px;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.panel .panel-heading {
  font-family: 'Scania Sans';
  font-weight: bold;
  border-radius: 0;
  text-transform: uppercase;
  margin: -1px;
  border-color: #dadada;
  border-bottom: none;
}
.panel .panel-heading h1,
.panel .panel-heading h2,
.panel .panel-heading h3,
.panel .panel-heading h4,
.panel .panel-heading h5,
.panel .panel-heading h6 {
  font-family: 'Scania Sans Headline';
  font-weight: bold;
  padding: 4px 0;
  margin: 0;
  letter-spacing: 0.03rem;
  color: white;
}
.panel .panel-heading h3 {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
}
.panel .panel-heading [class^="icon-"],
.panel .panel-heading [class*=" icon-"] {
  font-size: 14px;
}
.panel .panel-heading + .panel-body,
.panel .panel-heading + .portlet-application {
  padding: 15px;
}
.panel .panel-title {
  color: inherit;
  font-size: 1.8rem;
}
.panel .panel-title small {
  display: block;
  margin: 4px 0;
  font-size: 0.75em;
  font-family: 'Scania Sans';
  text-transform: initial;
  color: inherit;
}
.panel .panel-body,
.panel .portlet-application {
  padding: 30px 40px;
}
.panel .panel-body h3,
.panel .portlet-application h3 {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  font-size: 23px;
  padding-top: 5px;
  color: #041e42;
}
.panel .panel-body h4,
.panel .portlet-application h4 {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  color: #4a8ba4;
  margin-top: 0;
  margin-bottom: 20px;
}
.panel .panel-body p,
.panel .portlet-application p {
  font-size: 16px;
}
.panel .panel-footer {
  background-color: transparent;
  border-color: inherit;
  margin-top: 15px;
  border-top: none;
  font-weight: bold;
  border-radius: 0;
}
.panel-inverse {
  background-color: #e7e7e7;
  border: 0px;
  color: inherit;
}
.panel-inverse:first-child {
  border: 1px solid #dadada;
}
.panel-inverse:first-child .panel-heading {
  background-color: #FFFFFF;
  color: #041e42;
  border: 1px solid #dadada;
}
.panel-inverse:first-child .panel-heading :first-child {
  color: #041e42;
}
.panel-inverse input[type=text] {
  background-color: #fff;
}
.panel.panel-onlyheading {
  background-color: transparent;
}
.panel.panel-onlyheading,
 > .panel.panel-onlyheading-heading {
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  border-radius: 0px;
}
.panel .panel-footer > .pagination {
  margin: 0;
}
.app .panel h1,
.app .panel h2,
.app .panel h3 {
  letter-spacing: 0.05rem;
}
.panel-default {
  border-color: #dadada;
}
.panel-default > .panel-heading {
  background-color: #e8f0f3;
}
.panel-default > .panel-heading h1,
.panel-default > .panel-footer h1,
.panel-default > .panel-heading h2,
.panel-default > .panel-footer h2,
.panel-default > .panel-heading h3,
.panel-default > .panel-footer h3,
.panel-default > .panel-heading h4,
.panel-default > .panel-footer h4,
.panel-default > .panel-heading h5,
.panel-default > .panel-footer h5,
.panel-default > .panel-heading h6,
.panel-default > .panel-footer h6 {
  color: #041e42;
}
.panel-default .panel-footer {
  color: #041e42;
  border-top: none;
  padding: 15px 15px;
}
.panel-primary {
  border-color: #041e42;
}
.panel-primary > .panel-heading {
  color: white;
  background-color: #041e42;
  border-color: #041e42;
}
.panel-primary .table caption,
.panel-primary .app .table caption {
  background-color: #041e42;
}
.panel-info {
  border-color: #4a8ba4;
}
.panel-info > .panel-heading {
  color: white;
  background-color: #4a8ba4;
  border-color: #4a8ba4;
}
.panel-info .table caption,
.panel-info .app .table caption {
  background-color: #4a8ba4;
}
.panel-success {
  border-color: #44a878;
}
.panel-success > .panel-heading {
  color: white;
  background-color: #44a878;
  border-color: #44a878;
}
.panel-success .table caption,
.panel-success .app .table caption {
  background-color: #44a878;
}
.panel-warning {
  border-color: #f2855f;
}
.panel-warning > .panel-heading {
  color: white;
  background-color: #f2855f;
  border-color: #f2855f;
}
.panel-warning .table caption,
.panel-warning .app .table caption {
  background-color: #f2855f;
}
.panel-danger {
  border-color: #cc1040;
}
.panel-danger > .panel-heading {
  color: white;
  background-color: #cc1040;
  border-color: #cc1040;
}
.panel-danger .table caption,
.panel-danger .app .table caption {
  background-color: #cc1040;
}
.well {
  background-color: #e7e7e7;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 0;
}
.well input {
  background-color: #FFFFFF;
}
.well input:disabled {
  background-color: #dfdee1;
  color: #a1a1a1;
  cursor: default;
}
.well input:read-only {
  background-color: transparent;
  cursor: default;
}
.well input:read-only:focus {
  cursor: default;
  box-shadow: none;
}
.jumbotron h1,
.jumbotron .h1 {
  color: #041e42;
}
.alert {
  border-radius: 0;
}
.alert strong {
  color: inherit;
}
.alert .alert-default {
  color: #666;
  background-color: #f5f5f5;
  border-color: #e5e5e5;
}
.alert .alert-sm {
  line-height: 25px;
  padding: 0 8px;
  display: inline-block;
  margin-bottom: 0;
}
.app .alert {
  font-size: 1.2rem;
}
.text-primary {
  color: #033a6a !important;
}
a.text-primary:hover {
  color: #021f38 !important;
}
.text-success {
  color: #44a878 !important;
}
a.text-success:hover {
  color: #35845e !important;
}
.text-info {
  color: #4a8ba4 !important;
}
a.text-info:hover {
  color: #3a6d81 !important;
}
.text-warning {
  color: #f2855f !important;
}
a.text-warning:hover {
  color: #ee6130 !important;
}
.text-danger {
  color: #cc1040 !important;
}
a.text-danger:hover {
  color: #9d0c31 !important;
}
legend {
  border: 0;
}
input[placeholder],
textarea[placeholder] {
  color: inherit;
}
input[placeholder]::-webkit-input-placeholder,
textarea[placeholder]::-webkit-input-placeholder {
  color: inherit;
}
input[placeholder]:-moz-placeholder,
textarea[placeholder]:-moz-placeholder {
  color: inherit;
}
input[placeholder]::-moz-placeholder,
textarea[placeholder]::-moz-placeholder {
  color: inherit;
}
input[placeholder]:-ms-input-placeholder,
textarea[placeholder]:-ms-input-placeholder {
  color: inherit;
}
.form-control {
  color: #747472;
  padding: 20px 40px;
  height: 63px;
  box-shadow: none;
  border-radius: 0;
  border: 0;
  font-size: inherit;
  font-weight: normal;
  background-color: #f5f5f5;
  border: 1px solid transparent;
}
select.form-control {
  cursor: pointer;
}
.form-control[readonly] {
  background-color: transparent;
  cursor: default;
}
.form-control[readonly]:focus {
  cursor: default;
  box-shadow: none;
  border: 1px solid #4a8ba4;
  background: #f2f7f9;
}
.form-control[disabled] {
  opacity: 0.3;
  background-color: #dfdee1;
  border: 2px solid grey;
}
.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #f2f7f9;
  border: 1px solid #4a8ba4;
}
.app .form-control {
  padding: 4px 12px;
  height: 46px;
}
.compact .form-control {
  height: 30px;
  padding: 12px 10px;
  line-height: 32px;
  font-size: 12px;
}
.form-condensed .form-group {
  margin-bottom: 5px;
}
.control-label {
  font-family: 'Scania Sans';
  font-weight: bold;
  font-size: 0.9em;
  white-space: normal;
}
.form-horizontal .control-label,
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 9px;
}
.form-inline .radio + .radio,
.form-inline .checkbox + .checkbox {
  margin-left: 10px;
}
.form-control-static {
  padding-bottom: 0;
}
.input-sm,
.form-condensed .form-control {
  height: 30px;
  border-radius: 0;
}
.input-lg {
  height: 39px;
  border-radius: 0;
}
.table .form-control {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  height: 30px;
  border-radius: 0;
}
.table .input-group-btn .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  height: 30px;
  border-radius: 0;
  margin: 0 0 0 -1px;
}
fieldset {
  border: 2px dotted silver;
  padding: 25px 25px 5px 5px;
  margin-bottom: 30px;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  opacity: 0.3;
  background-color: #dfdee1;
  border: 2px solid grey;
}
.radio label {
  padding-left: -1px;
  margin-bottom: 0;
}
.checkbox label {
  padding-left: 0px;
  margin-bottom: 0;
}
input[type=checkbox] {
  height: 26px;
  width: 26px;
  position: static;
  display: inline-block;
  vertical-align: text-bottom;
}
.checkbox input[type=checkbox] {
  position: static;
}
.app input[type=checkbox] {
  height: 17px;
  width: 20px;
  position: static;
  display: inline-block;
  vertical-align: text-bottom;
}
input[type=checkbox] + span {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  margin-left: -35px;
}
.app input[type=checkbox] + span {
  margin-left: 0px;
  right: 3px;
}
input[type=checkbox] + span:before {
  content: "";
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1.1px solid #6f6f70;
  border-radius: 1.2px;
  margin: 3px 1px 3px 3px;
}
.app input[type=checkbox] + span:before {
  width: 18px;
  height: 18px;
}
input[type=checkbox]:hover + span:before {
  background-color: #f2f7f9;
}
input[type=checkbox]:checked + span:before {
  content: "";
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjM2Ljk4OCIgaGVpZ2h0PSIyMzYuOTg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8Zz4gIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4gIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIyMDIiIHdpZHRoPSIyMDIiIHk9Ii0xIiB4PSItMSIvPiA8L2c+IDxnPiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPiAgPHBvbHlnb24gZmlsbD0iI2ZmZmZmZiIgaWQ9InN2Z18xIiBwb2ludHM9IjE5OC4wOTgsMjQuMzI2IDg3LjU0MywxMzQuODgxIDM4Ljg5MSw4Ni4yMjkgMCwxMjUuMTIxIDg3LjU0MywyMTIuNjYyIDIzNi45ODgsNjMuMjE3ICIvPiAgPGcgaWQ9InN2Z18yIi8+ICA8ZyBpZD0ic3ZnXzMiLz4gIDxnIGlkPSJzdmdfNCIvPiAgPGcgaWQ9InN2Z181Ii8+ICA8ZyBpZD0ic3ZnXzYiLz4gIDxnIGlkPSJzdmdfNyIvPiAgPGcgaWQ9InN2Z184Ii8+ICA8ZyBpZD0ic3ZnXzkiLz4gIDxnIGlkPSJzdmdfMTAiLz4gIDxnIGlkPSJzdmdfMTEiLz4gIDxnIGlkPSJzdmdfMTIiLz4gIDxnIGlkPSJzdmdfMTMiLz4gIDxnIGlkPSJzdmdfMTQiLz4gIDxnIGlkPSJzdmdfMTUiLz4gIDxnIGlkPSJzdmdfMTYiLz4gPC9nPjwvc3ZnPg==);
  background-size: 20px;
  background-position: 50%;
  background-repeat: no-repeat;
  border-color: #041E42;
  background-color: #041E42;
}
.app input[type=checkbox]:checked + span:before {
  font-size: 11px;
  line-height: 12px;
  background-size: 12px;
}
input[type=checkbox]:checked + span {
  border-color: #242424;
}
input[type=checkbox]:checked + span:before {
  background-color: #242424;
}
input[type=checkbox]:checked:hover + span {
  border-color: #033a6a;
}
input[type=checkbox]:checked:hover + span:before {
  background-color: #033a6a;
  border: 1.1px solid #033a6a;
}
input[type=checkbox]:disabled + span:before,
input[type=checkbox]:disabled:hover + span:before {
  background: #fff;
  border: 1.1px solid #C8C9C7;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  display: none;
}
input[type=radio] {
  /* Hover states */
}
input[type=radio] + span {
  position: relative;
  margin-left: -20px;
  display: inline-block;
  border: 2px solid #041E42;
  background-color: #fff;
  line-height: normal;
  border-radius: 15px;
  zoom: .8;
  vertical-align: text-bottom;
  right: 2px;
}
input[type=radio] + span:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: inherit;
  border: 0.3em solid #FFF;
  vertical-align: bottom;
}
.app input[type=radio] + span:before {
  width: 16px;
  height: 16px;
}
.app input[type=radio] + span {
  border-radius: 10px;
}
input[type=radio]:hover + span:before {
  background-color: #f2f7f9;
  border-color: #f2f7f9;
}
input[type=radio]:focus {
  outline: none;
}
input[type=radio]:checked + span {
  border-color: #242424;
}
input[type=radio]:checked + span:before {
  background-color: #242424;
}
input[type=radio]:checked:hover + span {
  border-color: #033a6a;
}
input[type=radio]:checked:hover + span:before {
  background-color: #033a6a;
}
input[type=radio]:disabled + span,
input[type=radio]:disabled:hover + span {
  border: 2px solid #C8C9C7;
}
input[type=radio]:disabled + span:before,
input[type=radio]:disabled:hover + span:before {
  border: 2px solid #fff;
  background: #fff;
}
.radio-inline,
.checkbox-inline {
  padding-left: 5px;
}
.nowrap {
  white-space: nowrap;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
}
select::-ms-expand {
  border: none;
  background-color: #f5f5f5;
}
.well select::-ms-expand {
  border: none;
  background-color: #FFFFFF;
}
.custom-select {
  font-size: inherit;
  width: 100%;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSIxNzkyIiBoZWlnaHQ9IjE3OTIiIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzOTUgNzM2cTAgMTMtMTAgMjNsLTQ2NiA0NjZxLTEwIDEwLTIzIDEwdC0yMy0xMGwtNDY2LTQ2NnEtMTAtMTAtMTAtMjN0MTAtMjNsNTAtNTBxMTAtMTAgMjMtMTB0MjMgMTBsMzkzIDM5MyAzOTMtMzkzcTEwLTEwIDIzLTEwdDIzIDEwbDUwIDUwcTEwIDEwIDEwIDIzeiIvPjwvc3ZnPg==);
  background-size: 37px;
  background-position: calc(98%) center;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
}
.custom-select:focus {
  font-size: inherit;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #4a8ba4;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSIxNzkyIiBoZWlnaHQ9IjE3OTIiIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzOTUgNzM2cTAgMTMtMTAgMjNsLTQ2NiA0NjZxLTEwIDEwLTIzIDEwdC0yMy0xMGwtNDY2LTQ2NnEtMTAtMTAtMTAtMjN0MTAtMjNsNTAtNTBxMTAtMTAgMjMtMTB0MjMgMTBsMzkzIDM5MyAzOTMtMzkzcTEwLTEwIDIzLTEwdDIzIDEwbDUwIDUwcTEwIDEwIDEwIDIzeiIvPjwvc3ZnPg==);
  background-size: 31px;
  background-position: calc(98%) center;
  background-repeat: no-repeat;
  background-color: #f2f7f9;
}
.custom-select > option {
  background: #FFFFFF;
}
.app .custom-select {
  background-size: 27px;
  background-position: calc(98%) center;
}
.well .custom-select {
  background-color: #FFFFFF;
}
.portlet-application .popover {
  max-width: none;
}
.portlet-application .popover-content {
  font-family: Arial, sans-serif;
  font-weight: normal;
  font-size: 12px;
  color: #53565a;
}
.portlet-application .popover-content.popover-content-scrollable {
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
.portlet-application .popover-title {
  border-bottom: 1px solid #ebebeb;
}
.popover.popover-md {
  max-width: 350px;
}
.popover.popover-lg {
  max-width: 480px;
}
.popover .popover-footer {
  padding: 8px 14px;
  border-top: 1px solid #ebebeb;
}
.tooltip {
  font-family: "Scania Sans Condensed";
}
.tooltip.in {
  opacity: 1;
}
.tooltip .tooltip-inner {
  max-width: 250px;
  background-color: #fff;
  color: #000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.14);
  border: 1px solid #e2e2e2;
  border-radius: 0;
  padding: 10px 10px;
}
.tooltip.top .tooltip-arrow {
  border-top-color: #fff;
  border-width: 6px 7px 0;
}
.tooltip.top-left .tooltip-arrow {
  border-top-color: #fff;
}
.tooltip.top-right .tooltip-arrow {
  border-top-color: #fff;
}
.tooltip.right .tooltip-arrow {
  border-right-color: #fff;
  border-width: 5px 6px 7px 0;
}
.tooltip.left .tooltip-arrow {
  border-left-color: #fff;
  border-width: 5px 0 7px 6px;
}
.tooltip.bottom .tooltip-arrow {
  border-bottom-color: #fff;
  border-width: 0px 7px 6px;
}
.tooltip.bottom-left .tooltip-arrow {
  border-bottom-color: #fff;
}
.tooltip.bottom-right .tooltip-arrow {
  border-bottom-color: #fff;
}
.app .tooltip {
  font-size: 1.2rem;
}
/*** MODAL SIZES ***/
.modal-header .modal-title {
  font-family: 'Scania Sans Headline';
  font-weight: bold;
  color: #041e42;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-body {
  font-size: 1.6rem;
}
.modal-content {
  border-radius: 0;
}
.modal-title {
  padding: 0;
}
.modal-sm {
  width: 80%;
  max-width: 400px;
}
.modal-md {
  width: 80%;
  max-width: 600px;
}
.modal-lg {
  width: 80%;
  max-width: 900px;
}
.modal-xl {
  width: 99%;
  max-width: 1440px;
}
.row {
  display: block;
}
.has-success .form-control,
.has-success.form-control,
table.has-success tr td,
tr.has-success td {
  border-color: #468847;
  color: #468847;
  background-color: #dff0d8;
}
.has-warning .form-control,
.has-warning.form-control,
table.has-warning tr td,
tr.has-warning td {
  border-color: #c09853;
  background: #fcf8e3;
  color: #c09853;
}
.has-error .form-control,
.has-error.form-control,
.has-danger .form-control,
.has-danger.form-control,
table.has-danger tr td,
tr.has-danger td {
  border-color: #b94a48;
  background: #f6e8e8;
  color: #a94442;
}
.has-info .form-control,
.has-info.form-control,
table.has-info tr td,
tr.has-info td {
  border-color: #3a87ad;
  background: #d9edf7;
  color: #3a87ad;
}
.dropdown-menu a.has-danger {
  background: #f2dede;
  color: #b94a48;
}
.notification-container {
  position: fixed;
  z-index: 1060;
  top: 0;
  right: 15px;
  width: 400px;
  max-height: 100vh;
  overflow: hidden;
  padding-bottom: 15px;
}
.notification-container:hover {
  overflow-y: auto;
}
.notification-container:hover .notification {
  max-width: 100%;
  max-height: 100%;
}
.notification-container.top-left {
  top: 0;
  left: 15px;
  right: auto;
}
.notification-container.top-center {
  top: 0;
  right: 50%;
  margin-right: -200px;
}
.notification-container.top-right {
  top: 0;
  right: 15px;
}
.notification-container.bottom-left {
  top: auto;
  left: 15px;
  right: auto;
  bottom: 0;
}
.notification-container.bottom-center {
  top: auto;
  right: 50%;
  bottom: 0;
  margin-right: -200px;
}
.notification-container.bottom-right {
  top: auto;
  right: 15px;
  bottom: 0;
}
.notification-container.bottom-left,
.notification-container.bottom-center,
.notification-container.bottom-right {
  padding-bottom: 0;
  padding-top: 15px;
}
.notification-container.bottom-left .notification,
.notification-container.bottom-center .notification,
.notification-container.bottom-right .notification {
  top: 0;
  bottom: 15px;
}
.notification-container .notification {
  position: relative;
  top: 15px;
  z-index: 1;
  overflow: hidden;
  opacity: 1;
  max-height: 2000px;
}
.notification-container .notification.notification-dismissible {
  padding-right: 15px;
}
.notification-container .notification.notification-dismissible .close {
  right: 0;
}
.notification-container .notification.notification-collapsing:after {
  content: "";
  position: absolute;
  top: 13px;
  right: 13px;
  width: 18px;
  height: 18px;
  z-index: 10;
  background-color: transparent;
}
.notification-container .notification.notification-info .notification-inner {
  border-top: 1px solid #4a8ba4;
}
.notification-container .notification.notification-info > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  background-color: #4a8ba4;
}
.notification-container .notification.notification-success .notification-inner {
  border-top: 1px solid #44a878;
}
.notification-container .notification.notification-success > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  background-color: #44a878;
}
.notification-container .notification.notification-warning .notification-inner {
  border-top: 1px solid #f2855f;
}
.notification-container .notification.notification-warning > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  background-color: #f2855f;
}
.notification-container .notification.notification-danger .notification-inner {
  border-top: 1px solid #cc1040;
}
.notification-container .notification.notification-danger > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  background-color: #cc1040;
}
.notification-container .notification.notification-group {
  padding-top: 30px;
}
.notification-container .notification .notification-inner {
  overflow: hidden;
  position: relative;
  padding-left: 25px;
  margin-top: 15px;
  padding-top: 15px;
}
.notification-container .notification .notification-inner:before {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -8px;
  font-size: 16px;
}
.notification-container .notification > .notification-inner {
  border-top: 0 !important;
  margin-top: 0;
  padding-top: 0;
}
.notification-container .notification > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 0 8px;
  line-height: 20px;
}
.notification-container .notification > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle .dijitTitlePaneTextNode {
  margin: 0;
  padding: 0;
}
.notification-container .notification h4 {
  margin: 0;
  border: none;
}
.notification-container .notification p:last-child {
  margin: 0;
}
.notification-container .notification .close {
  font-size: 16px;
}
@media (min-width: 768px) {
  .lead {
    font-size: 18px;
  }
}
@media (max-width: 1200px) {
  .container {
    width: auto;
  }
}
.list-group {
  font-family: 'Scania Sans';
  font-weight: bold;
  margin-bottom: 60px;
}
.list-group-light .list-group-item {
  background-color: transparent;
  border: 0;
  padding: 10px 5px;
}
.list-group-item {
  background-color: #fff;
  position: relative;
  padding: 20px;
  border: 1px solid #e2e2e2;
}
.list-group-item:first-child,
.list-group-item:last-child {
  border-radius: 0;
}
.list-group-item.active {
  z-index: 0;
  background-color: #4a8ba4;
  border-color: #4a8ba4;
}
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 0;
  background-color: #4a8ba4;
  border-color: #4a8ba4;
}
.list-group-item.submenu-item {
  background-color: #e3edf0;
  border-color: #e3edf0;
  color: #000;
}
.align-baseline {
  vertical-align: baseline !important;
}
.align-top {
  vertical-align: top !important;
}
.align-middle {
  vertical-align: middle !important;
}
.align-bottom {
  vertical-align: bottom !important;
}
.align-text-bottom {
  vertical-align: text-bottom !important;
}
.align-text-top {
  vertical-align: text-top !important;
}
.w-25 {
  width: 25% !important;
}
.w-50 {
  width: 50% !important;
}
.w-75 {
  width: 75% !important;
}
.w-100 {
  width: 100% !important;
}
.h-25 {
  height: 25% !important;
}
.h-50 {
  height: 50% !important;
}
.h-75 {
  height: 75% !important;
}
.h-100 {
  height: 100% !important;
}
.mw-100 {
  max-width: 100% !important;
}
.mh-100 {
  max-height: 100% !important;
}
.m-0 {
  margin: 0 !important;
}
.mt-0,
.my-0 {
  margin-top: 0 !important;
}
.mr-0,
.mx-0 {
  margin-right: 0 !important;
}
.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}
.ml-0,
.mx-0 {
  margin-left: 0 !important;
}
.m-1 {
  margin: 0.25rem !important;
}
.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}
.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}
.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}
.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}
.m-2 {
  margin: 0.5rem !important;
}
.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}
.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}
.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}
.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}
.m-3 {
  margin: 1rem !important;
}
.mt-3,
.my-3 {
  margin-top: 1rem !important;
}
.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}
.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}
.m-4 {
  margin: 1.5rem !important;
}
.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}
.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}
.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}
.m-5 {
  margin: 3rem !important;
}
.mt-5,
.my-5 {
  margin-top: 3rem !important;
}
.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}
.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}
.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}
.p-0 {
  padding: 0 !important;
}
.pt-0,
.py-0 {
  padding-top: 0 !important;
}
.pr-0,
.px-0 {
  padding-right: 0 !important;
}
.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}
.pl-0,
.px-0 {
  padding-left: 0 !important;
}
.p-1 {
  padding: 0.25rem !important;
}
.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}
.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}
.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}
.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}
.p-2 {
  padding: 0.5rem !important;
}
.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}
.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}
.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}
.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}
.p-3 {
  padding: 1rem !important;
}
.pt-3,
.py-3 {
  padding-top: 1rem !important;
}
.pr-3,
.px-3 {
  padding-right: 1rem !important;
}
.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}
.pl-3,
.px-3 {
  padding-left: 1rem !important;
}
.p-4 {
  padding: 1.5rem !important;
}
.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}
.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}
.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}
.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}
.p-5 {
  padding: 3rem !important;
}
.pt-5,
.py-5 {
  padding-top: 3rem !important;
}
.pr-5,
.px-5 {
  padding-right: 3rem !important;
}
.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}
.pl-5,
.px-5 {
  padding-left: 3rem !important;
}
.m-auto {
  margin: auto !important;
}
.mt-auto,
.my-auto {
  margin-top: auto !important;
}
.mr-auto,
.mx-auto {
  margin-right: auto !important;
}
.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}
.ml-auto,
.mx-auto {
  margin-left: auto !important;
}
@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }
  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .mt-sm-1,
  .my-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.25rem !important;
  }
  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mr-sm-2,
  .mx-sm-2 {
    margin-right: 0.5rem !important;
  }
  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .mt-sm-3,
  .my-sm-3 {
    margin-top: 1rem !important;
  }
  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 1rem !important;
  }
  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 1rem !important;
  }
  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .mt-sm-5,
  .my-sm-5 {
    margin-top: 3rem !important;
  }
  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 3rem !important;
  }
  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 3rem !important;
  }
  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 3rem !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .pt-sm-0,
  .py-sm-0 {
    padding-top: 0 !important;
  }
  .pr-sm-0,
  .px-sm-0 {
    padding-right: 0 !important;
  }
  .pb-sm-0,
  .py-sm-0 {
    padding-bottom: 0 !important;
  }
  .pl-sm-0,
  .px-sm-0 {
    padding-left: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .pt-sm-1,
  .py-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pr-sm-1,
  .px-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pb-sm-1,
  .py-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-sm-1,
  .px-sm-1 {
    padding-left: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .pt-sm-2,
  .py-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pr-sm-2,
  .px-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pb-sm-2,
  .py-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-sm-2,
  .px-sm-2 {
    padding-left: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .pt-sm-3,
  .py-sm-3 {
    padding-top: 1rem !important;
  }
  .pr-sm-3,
  .px-sm-3 {
    padding-right: 1rem !important;
  }
  .pb-sm-3,
  .py-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pl-sm-3,
  .px-sm-3 {
    padding-left: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .pt-sm-4,
  .py-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pr-sm-4,
  .px-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pb-sm-4,
  .py-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .pt-sm-5,
  .py-sm-5 {
    padding-top: 3rem !important;
  }
  .pr-sm-5,
  .px-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-5,
  .py-sm-5 {
    padding-bottom: 3rem !important;
  }
  .pl-sm-5,
  .px-sm-5 {
    padding-left: 3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mt-sm-auto,
  .my-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-auto,
  .mx-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-auto,
  .my-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-auto,
  .mx-sm-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }
  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .mt-md-1,
  .my-md-1 {
    margin-top: 0.25rem !important;
  }
  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.25rem !important;
  }
  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .mt-md-2,
  .my-md-2 {
    margin-top: 0.5rem !important;
  }
  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important;
  }
  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .mt-md-3,
  .my-md-3 {
    margin-top: 1rem !important;
  }
  .mr-md-3,
  .mx-md-3 {
    margin-right: 1rem !important;
  }
  .mb-md-3,
  .my-md-3 {
    margin-bottom: 1rem !important;
  }
  .ml-md-3,
  .mx-md-3 {
    margin-left: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important;
  }
  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important;
  }
  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .mt-md-5,
  .my-md-5 {
    margin-top: 3rem !important;
  }
  .mr-md-5,
  .mx-md-5 {
    margin-right: 3rem !important;
  }
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 3rem !important;
  }
  .ml-md-5,
  .mx-md-5 {
    margin-left: 3rem !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .pt-md-0,
  .py-md-0 {
    padding-top: 0 !important;
  }
  .pr-md-0,
  .px-md-0 {
    padding-right: 0 !important;
  }
  .pb-md-0,
  .py-md-0 {
    padding-bottom: 0 !important;
  }
  .pl-md-0,
  .px-md-0 {
    padding-left: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .pt-md-1,
  .py-md-1 {
    padding-top: 0.25rem !important;
  }
  .pr-md-1,
  .px-md-1 {
    padding-right: 0.25rem !important;
  }
  .pb-md-1,
  .py-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-md-1,
  .px-md-1 {
    padding-left: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .pt-md-2,
  .py-md-2 {
    padding-top: 0.5rem !important;
  }
  .pr-md-2,
  .px-md-2 {
    padding-right: 0.5rem !important;
  }
  .pb-md-2,
  .py-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-md-2,
  .px-md-2 {
    padding-left: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .pt-md-3,
  .py-md-3 {
    padding-top: 1rem !important;
  }
  .pr-md-3,
  .px-md-3 {
    padding-right: 1rem !important;
  }
  .pb-md-3,
  .py-md-3 {
    padding-bottom: 1rem !important;
  }
  .pl-md-3,
  .px-md-3 {
    padding-left: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .pt-md-4,
  .py-md-4 {
    padding-top: 1.5rem !important;
  }
  .pr-md-4,
  .px-md-4 {
    padding-right: 1.5rem !important;
  }
  .pb-md-4,
  .py-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-md-4,
  .px-md-4 {
    padding-left: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .pt-md-5,
  .py-md-5 {
    padding-top: 3rem !important;
  }
  .pr-md-5,
  .px-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-5,
  .py-md-5 {
    padding-bottom: 3rem !important;
  }
  .pl-md-5,
  .px-md-5 {
    padding-left: 3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mt-md-auto,
  .my-md-auto {
    margin-top: auto !important;
  }
  .mr-md-auto,
  .mx-md-auto {
    margin-right: auto !important;
  }
  .mb-md-auto,
  .my-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-auto,
  .mx-md-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.25rem !important;
  }
  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.5rem !important;
  }
  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .mt-lg-3,
  .my-lg-3 {
    margin-top: 1rem !important;
  }
  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important;
  }
  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 1rem !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important;
  }
  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .mt-lg-5,
  .my-lg-5 {
    margin-top: 3rem !important;
  }
  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 3rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .pt-lg-3,
  .py-lg-3 {
    padding-top: 1rem !important;
  }
  .pr-lg-3,
  .px-lg-3 {
    padding-right: 1rem !important;
  }
  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pl-lg-3,
  .px-lg-3 {
    padding-left: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .pt-lg-5,
  .py-lg-5 {
    padding-top: 3rem !important;
  }
  .pr-lg-5,
  .px-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 3rem !important;
  }
  .pl-lg-5,
  .px-lg-5 {
    padding-left: 3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .mt-xl-3,
  .my-xl-3 {
    margin-top: 1rem !important;
  }
  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 1rem !important;
  }
  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .mt-xl-5,
  .my-xl-5 {
    margin-top: 3rem !important;
  }
  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 3rem !important;
  }
  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 3rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .pt-xl-3,
  .py-xl-3 {
    padding-top: 1rem !important;
  }
  .pr-xl-3,
  .px-xl-3 {
    padding-right: 1rem !important;
  }
  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xl-3,
  .px-xl-3 {
    padding-left: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .pt-xl-5,
  .py-xl-5 {
    padding-top: 3rem !important;
  }
  .pr-xl-5,
  .px-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xl-5,
  .px-xl-5 {
    padding-left: 3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important;
  }
}
/*** COLOR CLASSES (Custom classes for labels, badges and other special effects / notifications) ***/
.color-brand-01 {
  color: #041e42 !important;
}
.color-brand-02 {
  color: #fafafa !important;
}
.color-brand-03 {
  color: #d6001c !important;
}
.color-primary-01 {
  color: #c8c9c7 !important;
}
.color-primary-02 {
  color: #97999b !important;
}
.color-primary-03 {
  color: #53565a !important;
}
.color-primary-04 {
  color: #2d2926 !important;
}
.color-secondary-01 {
  color: #e35205 !important;
}
.color-secondary-02 {
  color: #ceb888 !important;
}
.color-secondary-03 {
  color: #94a596 !important;
}
.color-secondary-04 {
  color: #2c5234 !important;
}
.color-tertiary-01 {
  color: #448691 !important;
}
.color-tertiary-02 {
  color: #5e3885 !important;
}
.color-tertiary-03 {
  color: #005d6d !important;
}
.color-tertiary-04 {
  color: #e1a93e !important;
}
.color-tertiary-05 {
  color: #896a73 !important;
}
.color-tertiary-06 {
  color: #5da7a9 !important;
}
.color-tertiary-07 {
  color: #60b269 !important;
}
.color-grey1 {
  color: #fafafa !important;
}
.color-grey2 {
  color: #f6f9fa !important;
}
.color-grey3 {
  color: #f0f0f0 !important;
}
.color-grey4 {
  color: #e7e8ea !important;
}
.color-grey5 {
  color: #e2e2e2 !important;
}
.color-grey6 {
  color: #c8c9c7 !important;
}
.color-grey7 {
  color: #97999b !important;
}
.color-grey8 {
  color: #53565a !important;
}
.color-grey9 {
  color: #2d2926 !important;
}
.color-primary {
  color: #041e42 !important;
}
.color-success {
  color: #44a878 !important;
}
.color-warning {
  color: #f2855f !important;
}
.color-danger {
  color: #cc1040 !important;
}
.color-info {
  color: #4a8ba4 !important;
}
.color-disabled {
  color: #ddd !important;
}
.bg-brand-01 {
  background-color: #041e42 !important;
}
.bg-brand-02 {
  background-color: #fafafa !important;
}
.bg-brand-03 {
  background-color: #d6001c !important;
}
.bg-primary-01 {
  background-color: #c8c9c7 !important;
}
.bg-primary-02 {
  background-color: #97999b !important;
}
.bg-primary-03 {
  background-color: #53565a !important;
}
.bg-primary-04 {
  background-color: #2d2926 !important;
}
.bg-secondary-01 {
  background-color: #e35205 !important;
}
.bg-secondary-02 {
  background-color: #ceb888 !important;
}
.bg-secondary-03 {
  background-color: #94a596 !important;
}
.bg-secondary-04 {
  background-color: #2c5234 !important;
}
.bg-tertiary-01 {
  background-color: #448691 !important;
}
.bg-tertiary-02 {
  background-color: #5e3885 !important;
}
.bg-tertiary-03 {
  background-color: #005d6d !important;
}
.bg-tertiary-04 {
  background-color: #e1a93e !important;
}
.bg-tertiary-05 {
  background-color: #896a73 !important;
}
.bg-tertiary-06 {
  background-color: #5da7a9 !important;
}
.bg-tertiary-07 {
  background-color: #60b269 !important;
}
.bg-tertiary-01.bright {
  background-color: #58a4b0 !important;
}
.bg-tertiary-02.bright {
  background-color: #7747a9 !important;
}
.bg-tertiary-03.bright {
  background-color: #0089a0 !important;
}
.bg-tertiary-04.bright {
  background-color: #e8bd6a !important;
}
.bg-tertiary-05.bright {
  background-color: #a1858d !important;
}
.bg-tertiary-06.bright {
  background-color: #7eb9bb !important;
}
.bg-tertiary-07.bright {
  background-color: #82c389 !important;
}
.bg-grey1 {
  background-color: #fafafa !important;
}
.bg-grey2 {
  background-color: #f6f9fa !important;
}
.bg-grey3 {
  background-color: #f0f0f0 !important;
}
.bg-grey4 {
  background-color: #e7e8ea !important;
}
.bg-grey5 {
  background-color: #e2e2e2 !important;
}
.bg-grey6 {
  background-color: #c8c9c7 !important;
}
.bg-grey7 {
  background-color: #97999b !important;
}
.bg-grey8 {
  background-color: #53565a !important;
}
.bg-grey9 {
  background-color: #2d2926 !important;
}
.bg-primary {
  background-color: #041e42 !important;
}
.bg-success {
  background-color: #44a878 !important;
}
.bg-warning {
  background-color: #f2855f !important;
}
.bg-danger {
  background-color: #cc1040 !important;
}
.bg-info {
  background-color: #4a8ba4 !important;
}
.bg-default-bright {
  background-color: #e7e5ea !important;
}
.bg-primary-bright {
  background-color: #d9dde3 !important;
}
.bg-success-bright {
  background-color: #e3f2eb !important;
}
.bg-warning-bright {
  background-color: #fdede7 !important;
}
.bg-danger-bright {
  background-color: #f7dbe2 !important;
}
.bg-info-bright {
  background-color: #e4eef1 !important;
}
.bg-half-primary {
  background-image: linear-gradient(to bottom right, transparent 0%, transparent 50%, #041e42 50%, #041e42 100%) !important;
}
.bg-half-success {
  background-image: linear-gradient(to bottom right, transparent 0%, transparent 50%, #44a878 50%, #44a878 100%) !important;
}
.bg-half-warning {
  background-image: linear-gradient(to bottom right, transparent 0%, transparent 50%, #f2855f 50%, #f2855f 100%) !important;
}
.bg-half-danger {
  background-image: linear-gradient(to bottom right, transparent 0%, transparent 50%, #cc1040 50%, #cc1040 100%) !important;
}
.bg-half-info {
  background-image: linear-gradient(to bottom right, transparent 0%, transparent 50%, #4a8ba4 50%, #4a8ba4 100%) !important;
}
.chart-series-01 {
  background-color: #041E42;
  fill: #041E42;
}
.chart-series-02 {
  background-color: #97999B;
  fill: #97999B;
}
.chart-series-03 {
  background-color: #CEB888;
  fill: #CEB888;
}
.chart-series-04 {
  background-color: #94A596;
  fill: #94A596;
}
.chart-series-05 {
  background-color: #53565A;
  fill: #53565A;
}
.chart-series-06 {
  background-color: #9bA5B4;
  fill: #9bA5B4;
}
.chart-series-07 {
  background-color: #C8C9C7;
  fill: #C8C9C7;
}
.chart-series-08 {
  background-color: #448691;
  fill: #448691;
}
.chart-series-09 {
  background-color: #896A73;
  fill: #896A73;
}
.chart-series-10 {
  background-color: #2C5234;
  fill: #2C5234;
}
.bg-gradient-01 {
  background-image: linear-gradient(90deg, #60e266, #b9ee51, #ffec00, #eda053, #e16060) !important;
}
.bg-cross {
  background-image: linear-gradient(to bottom right, transparent 45%, #ddd 48%, #ddd 51%, transparent 55%), linear-gradient(to bottom left, transparent 45%, #ddd 48%, #ddd 51%, transparent 55%) !important;
}
.bg-disabled {
  color: #ddd !important;
}
.btn-transparent {
  border-width: 1px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: #fff;
}
.btn-transparent:hover {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-decoration: none;
}
.btn-transparent:focus,
.btn-transparent:active {
  color: #fff;
}
.btn-close {
  background-color: transparent;
  border: 0;
  padding: 0;
}
.btn-close i {
  color: #000;
  opacity: 0.7;
}
.btn.btn-icon {
  background-color: transparent;
  border: 0;
  padding: 0 !important;
}
.btn.btn-icon:active,
.btn.btn-icon.active {
  -webkit-box-shadow: none;
  box-shadow: none;
  color: gray;
}
.app .btn-link.btn-info {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  text-decoration: none;
  color: #4a8ba4;
  background-color: transparent;
  border-color: transparent;
}
.app .btn-link.btn-info:hover,
.app .btn-link.btn-info:active,
.app .btn-link.btn-info.active {
  color: #6cabc3;
  background-color: transparent;
  border-color: transparent;
}
.app .btn-link.btn-info i {
  font-size: 20px;
}
/*** CURSOR ***/
.cursor-pointer {
  cursor: pointer !important;
}
.cursor-default {
  cursor: default !important;
}
.cursor-move {
  cursor: move !important;
}
.cursor-help {
  cursor: help !important;
}
/*** DISPLAY ***/
.display-inline {
  display: inline !important;
}
.display-block {
  display: block !important;
}
.input-sm,
.form-condensed .form-control {
  height: 30px;
  border-radius: 0;
}
.input-lg {
  height: 39px;
  border-radius: 0;
}
.table .form-control {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  height: 30px;
  border-radius: 0;
}
.table .input-group-btn .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  height: 30px;
  border-radius: 0;
  margin: 0 0 0 -1px;
}
.form-condensed .form-group {
  margin-bottom: 5px;
}
.form-group {
  position: relative;
}
.input-icon {
  position: absolute;
  top: 50%;
  margin-top: -12px;
  right: 8px;
  font-size: 22px;
}
.compact .input-icon {
  font-size: 16px;
}
.app .input-icon {
  font-size: 20px;
  right: 15px;
}
.input-icon.icon-remove-sign {
  cursor: pointer;
}
.headline {
  overflow: hidden;
}
.headline .button-container {
  float: right;
}
.headline h1,
.headline h2,
.headline h3,
.headline h4,
.headline h5,
.headline h6 {
  margin-top: 0;
  padding-bottom: 10px;
}
/*** NO WRAP ***/
.no-wrap {
  white-space: nowrap !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.h0neyp0t {
  display: none;
}
.light,
section.light,
.light > section,
section:nth-child(odd).light {
  background-color: #fff;
}
.dark,
section.dark,
.dark > section,
section:nth-child(odd).dark {
  background-color: #f7f7f7;
}
.content-panel {
  background-color: #fff;
  padding: 15px 25px;
  margin-bottom: 15px;
  -webkit-box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.15);
}
@media (max-width: 991px) {
  body.navigation-open {
    overflow: hidden;
    -ms-overflow-style: none;
  }
}
.label-delete {
  background-color: #f2dede;
  color: #a94442;
  border: 1px solid #d9aeae;
}
.label-create {
  background-color: #dff0d8;
  color: #3c763d;
  border: 1px solid #b8d2a2;
}
.label-update {
  background-color: #fcf8e3;
  color: #8a6d3b;
  border: 1px solid #d9c8a5;
}
.label-read {
  background-color: #d9edf7;
  color: #31708f;
  border: 1px solid #9ecbd4;
}
.list-table {
  padding: 0;
  margin: 0;
  clear: both;
}
.list-table li {
  list-style-type: none;
}
.list-table li:first-child {
  border: 0;
}
.list-table > li {
  padding: 0 15px;
}
.list-table > li:first-child > .row {
  border: 0;
}
.list-table .arrow {
  position: absolute;
  top: 50%;
  width: 16px;
  font-size: 16px;
  color: #555;
  margin-top: -8px;
  margin-left: -14px;
}
.list-table .arrow:hover,
.list-table .arrow:focus {
  text-decoration: none;
}
.list-table .btn-link > span {
  padding: 0;
}
.list-table .control-label {
  display: block;
}
.list-table .row {
  min-height: 55px;
  padding: 10px 0;
  border-top: 1px solid #eee;
  position: relative;
  line-height: 1.5;
}
.list-table > li > .row > div:first-child {
  padding-left: 6px;
}
.list-table > li > ul > li > .row > div:first-child {
  padding-left: 16px;
}
.list-table > li > ul > li > ul > li > .row > div:first-child {
  padding-left: 26px;
}
.list-table > li > ul > li > ul > li > ul > li > .row > div:first-child {
  padding-left: 36px;
}
.list-tree {
  padding: 0;
}
.list-tree ul {
  padding-left: 28px;
}
.list-tree li {
  position: relative;
  list-style: none;
  padding-top: 5px;
}
.list-tree li:before,
.list-tree li:after {
  content: "";
  left: -20px;
  position: absolute;
  right: auto;
}
.list-tree li:before {
  border-left: 1px solid #999;
  bottom: 50px;
  height: 100%;
  top: 1px;
  width: 1px;
}
.list-tree li:after {
  border-top: 1px solid #999;
  height: 20px;
  top: 18px;
  width: 20px;
}
.list-tree li:last-child:before {
  height: 17px;
}
.list-tree li > i,
.list-tree li > a,
.list-tree li > span,
.list-tree li > label > strong {
  padding: 4px 0 4px 6px;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
}
.list-tree li [data-target] {
  cursor: pointer;
}
.list-tree li [class^=icon-caret]:before {
  width: 8px;
}
.list-tree li label {
  padding-top: 0;
}
.list-tree li label:active {
  box-shadow: none;
}
.list-tree li label.active {
  box-shadow: none;
  border: 1px solid #aaa;
  color: #000;
}
.list-tree li .label {
  color: #333333;
  background-color: #fafafa;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 5px 8px;
  line-height: 15px;
  font-size: 11px;
  display: inline-block;
  cursor: default;
}
.list-tree li .badge {
  line-height: 6px;
  padding: 3px 4px 4px 3px;
  font-size: 10px;
  margin-top: 8px;
}
.list-tree > li:before,
.list-tree > li:after {
  border: 0;
}
[data-toggle=buttons] .list-tree .btn > input[type=radio],
[data-toggle=buttons] .list-tree .btn > input[type=checkbox] {
  position: absolute;
  z-index: -1;
  filter: alpha(opacity=0);
  opacity: 0;
}
.list-table {
  padding: 0;
  margin: 0;
  clear: both;
}
.list-table li {
  list-style-type: none;
}
.list-table li:first-child {
  border: 0;
}
.list-table > li {
  padding: 0 15px;
}
.list-table > li:first-child > .row {
  border: 0;
}
.list-table .arrow {
  position: absolute;
  top: 50%;
  width: 16px;
  font-size: 16px;
  color: #555;
  margin-top: -8px;
  margin-left: -14px;
}
.list-table .arrow:hover,
.list-table .arrow:focus {
  text-decoration: none;
}
.list-table .btn-link > span {
  padding: 0;
}
.list-table .control-label {
  display: block;
}
.list-table .row {
  min-height: 55px;
  padding: 10px 0;
  border-top: 1px solid #eee;
  position: relative;
  line-height: 1.5;
}
.list-table > li > .row > div:first-child {
  padding-left: 6px;
}
.list-table > li > ul > li > .row > div:first-child {
  padding-left: 16px;
}
.list-table > li > ul > li > ul > li > .row > div:first-child {
  padding-left: 26px;
}
.list-table > li > ul > li > ul > li > ul > li > .row > div:first-child {
  padding-left: 36px;
}
/*** MARGIN CUSTOM CLASSES ***/
.margin-none {
  margin: 0 !important;
}
.margin {
  margin: 15px !important;
}
.margin-top {
  margin-top: 15px !important;
}
.margin-right {
  margin-right: 15px !important;
}
.margin-left {
  margin-left: 15px !important;
}
.margin-bottom {
  margin-bottom: 15px !important;
}
.margin-top-auto {
  margin-top: auto !important;
}
.margin-right-auto {
  margin-right: auto !important;
}
.margin-left-auto {
  margin-left: auto !important;
}
.margin-bottom-auto {
  margin-bottom: auto !important;
}
.margin-auto {
  margin: 0 auto !important;
}
/*** PADDING CUSTOM CLASSES ***/
.padding {
  padding: 15px !important;
}
.padding-none {
  padding: 0 !important;
}
.top-padding {
  padding-top: 15px !important;
}
.right-padding {
  padding-right: 15px !important;
}
.left-padding {
  padding-left: 15px !important;
}
.bottom-padding {
  padding-bottom: 15px !important;
}
.padding-top {
  padding-top: 15px !important;
}
.padding-right {
  padding-right: 15px !important;
}
.padding-left {
  padding-left: 15px !important;
}
.padding-bottom {
  padding-bottom: 15px !important;
}
/*** Custom Tables ***/
.table tbody tr.row-selected > td,
.table tbody tr.row-selectable:hover > td {
  background-color: #ffffff;
  cursor: default;
}
.table tbody tr.row-selectable > td:first-child:before {
  margin-right: 10px;
}
.table tbody tr.row-selected + tr > td {
  background-color: #ffffff;
  padding-top: 0;
  border-top: 0;
}
.table tbody tr.row-selected + tr > td > * {
  background-color: #fff;
}
.table tbody tr.row-selected + tr > td > div {
  padding: 15px;
}
.table-clickable > tbody > tr {
  cursor: pointer;
}
.table-borderless tbody tr td,
.table-borderless thead tr td,
.table-borderless tbody tr th,
.table-borderless thead tr th {
  border: none;
}
.table-selectable > tbody > tr {
  border: 1px solid #dadada;
}
.table-selectable > tbody > tr:hover > td,
.table-selectable > tbody > tr.active:hover > td {
  background-color: #d9e8ef;
}
.table-selectable > tbody > tr.active,
.table-selectable > tbody > tr.selected,
.table-selectable > tbody > tr.expanded {
  border: 1px double #4a8ba4;
}
.table-selectable > tbody > tr.active.danger,
.table-selectable > tbody > tr.selected.danger,
.table-selectable > tbody > tr.expanded.danger {
  border-color: #cc1040;
}
.table-selectable > tbody > tr.active.success,
.table-selectable > tbody > tr.selected.success,
.table-selectable > tbody > tr.expanded.success {
  border-color: #44a878;
}
.table-selectable > tbody > tr.active > td,
.table-selectable > tbody > tr.selected > td,
.table-selectable > tbody > tr.expanded > td {
  background-color: #ebf2f5;
}
.table-selectable > tbody > tr.expandable > td:first-child:before {
  display: inline-block;
  width: 10px;
  margin-right: 2px;
}
.table-selectable > tbody > tr.expandable + tr > td {
  background-color: #bfa264;
  padding: 0;
}
.table-selectable > tbody > tr.expandable + tr > td > div {
  background-color: #fff;
  overflow: hidden;
  margin: 0 5px 5px;
}
.table-selectable > tbody > tr.expandable + tr > td > div > .content {
  padding: 10px;
}
.table-selectable > tbody > tr.expandable.expanded + .expand-child + .expand-child + .expanded > td {
  border-top: 3px solid #fff;
}
.table-panel {
  background-color: white;
  border: 1px solid;
  border-collapse: inherit;
}
.table-panel thead {
  word-break: normal;
  text-transform: uppercase;
  font-family: 'Scania Sans Condensed';
}
.table-data tbody tr:first-child th,
.table-data tbody tr:first-child td {
  border-top: 0;
}
.table-data tbody tr > td {
  background-color: #f5f5f5;
  font-weight: bold;
  font-size: 12px;
  font-family: 'Open Sans';
  text-align: center;
  padding: 0 20px;
  line-height: 22px;
}
.table-data tbody tr > td small {
  font-weight: normal;
}
.table-data tbody tr > td.divider-right {
  border-right: 2px solid #fff;
}
.table-data tbody tr > td.divider-left {
  border-left: 2px solid #fff;
}
.table-calculation {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 10px 6px;
}
.table-calculation .form-control[readonly] {
  background-color: transparent;
  border: 0;
  padding: 0;
  box-shadow: none;
  cursor: text;
  height: inherit;
}
.table-calculation .input-group {
  border-collapse: collapse;
}
.table-calculation > thead > tr > th {
  border: 0;
  padding-bottom: 0;
  padding-left: 0;
}
.table-calculation > tbody > tr > th,
.table-calculation > tbody > tr > td {
  border: 0;
  padding: 5px;
  background-color: #eee;
}
.table-calculation > tbody > tr > td,
.table-calculation > tbody > tr > td input {
  text-align: right;
}
.table-calculation > tbody tr.total td {
  background-color: transparent;
}
.table-calculation > tbody tr.selectable > td:first-child:before {
  padding-right: 6px;
}
.table-calculation > tbody tr.selectable:hover > td {
  background-color: #ceb888;
  cursor: default;
}
.table-calculation > tbody tr.child > td {
  background-color: #f6f6f6;
}
.table-calculation > tbody tr.child > td:first-child {
  border-left: 15px solid #fff !important;
}
.table-calculation > tbody tr.divider > td {
  vertical-align: top;
  border-top: 1px solid #eee !important;
  border-bottom: 1px solid #eee !important;
}
.table-calculation td,
.table-calculation input,
.table-calculation span {
  font-size: 12px;
}
.table-calculation td:first-child {
  text-align: left;
}
.table-calculation td.configurable {
  border: 1px solid #aa8b46 !important;
  position: relative;
}
.table-calculation td.configurable:before {
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -6px;
  color: #041e42;
}
.table-calculation td.configurable:hover {
  background-color: #d1e8f2;
}
.table-calculation td.configurable:hover,
.table-calculation td.configurable:hover span {
  cursor: pointer;
}
.table-calculation td.configurable input:hover {
  cursor: pointer;
}
.table-calculation td.configurable span {
  position: relative;
  display: block;
  margin: -5px;
  padding: 5px;
}
.filtered {
  display: none;
}
body[data-env]:before {
  background-color: #ddd;
  display: inline-block;
  padding: 52px 50px 2px;
  content: attr(data-env);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1170;
  -ms-transform: translateY(-50%) translateX(-50%) rotate(-45deg);
  -moz-transform: translateY(-50%) translateX(-50%) rotate(-45deg);
  -webkit-transform: translateY(-50%) translateX(-50%) rotate(-45deg);
  -o-transform: translateY(-50%) translateX(-50%) rotate(-45deg);
  transform: translateY(-50%) translateX(-50%) rotate(-45deg);
  text-transform: uppercase;
  font-size: 14px;
  border: 2px solid #fafafa;
}
body[data-env=dev]:before,
body[data-env=proj]:before,
body[data-env=demo]:before,
body[data-env=proto]:before,
body[data-env=development]:before,
body[data-env^=beta]:before {
  background-color: #94a596;
  color: #fff;
}
body[data-env=sys]:before {
  background-color: #2c5234;
  color: #fff;
}
body[data-env=acc]:before,
body[data-env=pre]:before {
  background-color: #ceb888;
  color: #fff;
}
body[data-env^="2"]:before {
  background-color: #041e42;
  color: #fff;
}
body[data-env=proto]:before {
  font-size: 10px;
}
body[data-env=""]:before,
body[data-env=prod]:before,
body[data-env=production]:before,
body[data-env=hidden]:before {
  display: none;
}
body[data-env=development]:before {
  content: "dev";
}
[ng\:cloak],
[ng-cloak],
[data-ng-cloak],
[x-ng-cloak],
.ng-cloak,
.x-ng-cloak {
  display: none !important;
}
.bootstrap input.ng-invalid:focus + [ng-messages],
.bootstrap select.ng-invalid:focus + [ng-messages] {
  display: block;
}
.bootstrap input.ng-invalid + [ng-messages],
.bootstrap select.ng-invalid + [ng-messages] {
  display: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  padding: 9px 14px;
  min-width: 150px;
  position: absolute;
  top: 50%;
  left: 100%;
  z-index: 1;
  transform: translate(0, -50%);
}
.bootstrap input.ng-invalid + [ng-messages]:before,
.bootstrap select.ng-invalid + [ng-messages]:before {
  content: "";
  left: -6px;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.display-flex {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
}
.display-flex > * {
  flex-grow: 1;
  flex-shrink: 0;
}
.container-flex {
  padding-left: 15px;
  padding-right: 15px;
}
.container-flex .row {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  -o-box-lines: multiple;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.container-flex .row:before {
  display: initial;
}
.container-flex .row > [class^="col"] {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  flex-direction: column;
}
.container-flex .row > [class^="col"] > *:first-child:last-child {
  flex-grow: 1;
  flex-shrink: 0;
}
.scania-small-logo {
  background-image: url('/resources/images/compressed/logotypes/logo_small.gif');
  background-repeat: no-repeat;
  width: 150px;
}
.scania-small-symbol {
  background-image: url('/resources/images/compressed/logotypes/scania_black_symbol.gif');
  background-repeat: no-repeat;
  width: 150px;
}
/*** MAXIMIZE FUNCTION ***/
#maximize-button {
  color: #418BCA;
  margin-top: 5px;
  margin-right: 20px;
}
body.maximized {
  margin-top: 0px !important;
}
body.maximized .container.portal-main-container {
  margin-top: 0px;
  width: 100%;
  max-width: 100%;
  padding: 0 15px;
  padding-top: 15px;
}
body.maximized .container {
  max-width: 100%;
}
body.maximized #prototype-header {
  display: none;
}
body.maximized .application-info {
  display: none;
}
body.maximized .main-header {
  display: none;
}
body.maximized nav {
  display: none;
}
body.maximized .main-navigation {
  display: none;
}
body.maximized .portal-footer {
  display: none;
}
@media (max-width: 991px) {
  #maximize-button {
    display: none;
  }
}
body.maximized #restore-button {
  display: none;
}
.notification-container {
  position: fixed;
  z-index: 1060;
  top: 0;
  right: 15px;
  width: 400px;
  max-height: 100vh;
  overflow: hidden;
  padding-bottom: 15px;
}
.notification-container:hover {
  overflow-y: auto;
}
.notification-container:hover .notification {
  max-width: 100%;
  max-height: 100%;
}
.notification-container.top-left {
  top: 0;
  left: 15px;
  right: auto;
}
.notification-container.top-center {
  top: 0;
  right: 50%;
  margin-right: -200px;
}
.notification-container.top-right {
  top: 0;
  right: 15px;
}
.notification-container.bottom-left {
  top: auto;
  left: 15px;
  right: auto;
  bottom: 0;
}
.notification-container.bottom-center {
  top: auto;
  right: 50%;
  bottom: 0;
  margin-right: -200px;
}
.notification-container.bottom-right {
  top: auto;
  right: 15px;
  bottom: 0;
}
.notification-container.bottom-left,
.notification-container.bottom-center,
.notification-container.bottom-right {
  padding-bottom: 0;
  padding-top: 15px;
}
.notification-container.bottom-left .notification,
.notification-container.bottom-center .notification,
.notification-container.bottom-right .notification {
  top: 0;
  bottom: 15px;
}
.notification-container .notification {
  position: relative;
  top: 15px;
  z-index: 1;
  overflow: hidden;
  opacity: 1;
  max-height: 2000px;
}
.notification-container .notification.notification-dismissible {
  padding-right: 15px;
}
.notification-container .notification.notification-dismissible .close {
  right: 0;
}
.notification-container .notification.notification-collapsing:after {
  content: "";
  position: absolute;
  top: 13px;
  right: 13px;
  width: 18px;
  height: 18px;
  z-index: 10;
  background-color: transparent;
}
.notification-container .notification.notification-info .notification-inner {
  border-top: 1px solid #4a8ba4;
}
.notification-container .notification.notification-info > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  background-color: #4a8ba4;
}
.notification-container .notification.notification-success .notification-inner {
  border-top: 1px solid #44a878;
}
.notification-container .notification.notification-success > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  background-color: #44a878;
}
.notification-container .notification.notification-warning .notification-inner {
  border-top: 1px solid #f2855f;
}
.notification-container .notification.notification-warning > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  background-color: #f2855f;
}
.notification-container .notification.notification-danger .notification-inner {
  border-top: 1px solid #cc1040;
}
.notification-container .notification.notification-danger > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  background-color: #cc1040;
}
.notification-container .notification.notification-group {
  padding-top: 30px;
}
.notification-container .notification .notification-inner {
  overflow: hidden;
  position: relative;
  padding-left: 25px;
  margin-top: 15px;
  padding-top: 15px;
}
.notification-container .notification .notification-inner:before {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -8px;
  font-size: 16px;
}
.notification-container .notification > .notification-inner {
  border-top: 0 !important;
  margin-top: 0;
  padding-top: 0;
}
.notification-container .notification > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 0 8px;
  line-height: 20px;
}
.notification-container .notification > .notification-inner + .dijitTitlePane > .dijitTitlePaneTitle .dijitTitlePaneTextNode {
  margin: 0;
  padding: 0;
}
.notification-container .notification h4 {
  margin: 0;
  border: none;
}
.notification-container .notification p:last-child {
  margin: 0;
}
.notification-container .notification .close {
  font-size: 16px;
}
.loading,
.locked {
  position: relative;
  overflow: hidden;
}
.loading:before,
.locked:before {
  display: block !important;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1150;
  width: 100%;
  height: 100%;
}
.loading:after,
.locked:after {
  display: block !important;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
  z-index: 1160;
}
.loading:before {
  background-color: rgba(250, 250, 250, 0.6);
}
.loading:after {
  top: 50%;
  font-size: 30px;
  content: "\e6f3";
  display: inline-block;
  -moz-animation: spin 2s infinite linear;
  -o-animation: spin 2s infinite linear;
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
}
.loading.full:before,
.loading.full:after {
  position: fixed;
}
html.loading {
  opacity: 1 !important;
}
.locked:before {
  background-color: rgba(150, 130, 130, 0.6);
}
.locked:after {
  content: "\e65e";
  font-size: 100px;
  color: #cc1040;
  top: 40%;
}
.locked.locked-sm:after {
  font-size: 50px;
  top: 48%;
}
.locked.locked-xs:after {
  font-size: 20px;
  top: 50%;
}
.loadingContainer {
  position: relative !important;
  overflow: hidden;
}
.loadingContainer > .loading {
  position: static;
}
.loadingContainer > .loading:before {
  width: inherit;
  top: inherit;
  left: inherit;
}
.img-thumbnail {
  border-radius: 0;
}
.panel .img-thumbnail {
  border: 0;
  padding: 0;
}
.page-header h1 small,
.page-header h2 small,
.page-header h3 small {
  font-family: "Scania Sans Headline";
  font-size: 0.5em;
  font-weight: normal;
  color: #041e42;
  display: block;
  margin-top: 0;
  margin-left: 0;
}
.app .page-header h1 {
  font-size: 3.3rem;
}
.app .page-header h2 {
  font-size: 3rem;
}
.app .page-header h3 {
  font-size: 2.7rem;
}
.app .page-header h1,
.app .page-header h2,
.app .page-header h3 {
  text-align: left;
}
.app .page-header h1 small,
.app .page-header h2 small,
.app .page-header h3 small {
  font-family: "Scania Sans";
  font-weight: bold;
  font-size: 0.6em;
}
header.c-page-header {
  background: transparent;
  margin-bottom: 15px;
}
header.c-page-header .page-header h1,
header.c-page-header .page-header h2,
header.c-page-header .page-header h3 {
  padding-top: 0;
  margin-bottom: 0.2rem;
  letter-spacing: 0.03rem;
  font-family: "Scania Sans Headline" !important;
  font-weight: bold;
}
header.c-page-header .page-header h3,
header.c-page-header .page-header h4 {
  display: inline;
  vertical-align: middle;
}
header.c-page-header .page-header h3 {
  font-size: 1.6rem;
  padding-right: 10px;
}
header.c-page-header .page-header h4 {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  font-size: 1.6rem;
  padding-left: 10px;
  border-left: 1px solid #041e42;
  padding-right: 0;
}
header.c-page-header .page-header .row {
  margin-bottom: 15px;
}
header.c-page-header .btn-toolbar {
  margin-top: 0;
}
header.c-page-header .form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #f2f7f9;
  border: 1px solid #4a8ba4;
}
.app header.c-page-header .form-control {
  background-color: #FFF;
}
html body.scania .page-header {
  border: none;
  margin-top: 0;
}
.alert-danger-validate {
  border-color: #cc1040;
  background-color: #eedae0;
}
.alert-success-validate {
  border-color: #44a878;
  background-color: #f2f9f5;
}
.modal-center .modal-header {
  border-bottom: none;
}
.modal-center .modal-body {
  text-align: center;
  padding: 0 36px;
}
.modal-center .modal-body h3 {
  font-size: 2.8rem;
  letter-spacing: -0.03rem;
}
.modal-center .modal-footer {
  margin: 30px;
  text-align: center;
  border-top: none;
}
.css_compiled_at:before {
  content: "Mon Sep 03 2018 17:00:06 GMT+0200 (W. Europe Daylight Time)";
}

  </style></template></dom-module>`;

  document.head.appendChild($_documentContainer.content);

  /**
   @license Apache 2.0
   Copyright (c) 2017 Horacio "LostInBrittany" Gonzalez for the style module encapsulation of CSS files
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   @demo demo/index.html
   */
  /*
   FIXME(polymer-modulizer): the above comments were extracted
   from HTML and may be out of place here. Review them and
   then delete this comment!
   */
  ;

}

