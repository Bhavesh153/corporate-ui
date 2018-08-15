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
  {%corporate-ui.css%}
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


