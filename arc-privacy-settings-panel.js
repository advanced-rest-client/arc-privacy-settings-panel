/**
@license
Copyright 2018 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@advanced-rest-client/arc-icons/arc-icons.js';
import '@polymer/paper-styles/shadow.js';
import {ArcSettingsPanelMixin} from '@advanced-rest-client/arc-settings-panel-mixin/arc-settings-panel-mixin.js';
import '@advanced-rest-client/arc-settings-panel-mixin/arc-settings-panel-styles.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
/**
 * Privacy settings panel for Advanced REST Client
 *
 * ## Styling
 *
 * `<arc-privacy-settings-panel>` provides the following custom properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--arc-request-settings-panel` | Mixin applied to this elment | `{}`
 * `--arc-settings-panel-header` | Mixin applied to settings panel header | `{}`
 * `--arc-settings-panel-header-color` | Color of the settings panel header | `--accent-color`
 * `--arc-settings-panel-icon-color` | Settings panel icon color | `rgba(0, 0, 0, 0.34)`
 * `--arc-font-subhead` | Mixin applied to the section headers | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof UiElements
 * @appliesMixin ArcSettingsPanelMixin
 */
export class ArcPrivacySettingsPanel extends ArcSettingsPanelMixin(PolymerElement) {
  static get template() {
    return html`
    <style include="arc-settings-panel-styles">
    :host {
      display: block;
      @apply --arc-privacy-settings-panel;
    }
    </style>
    <h2 class="panel-title">Account and privacy</h2>
    <section class="card">
      <paper-item class="clickable" on-click="_toggleOption">
        <paper-item-body two-line="">
          <div>
            Send anonymous usage data
          </div>
          <div secondary="true">Help us make ARC better by providing anonymous usage statistics.</div>
        </paper-item-body>
        <paper-toggle-button
          on-click="_cancelEvent"
          data-action="ga-switch"
          tabindex="-1"
          checked="{{telemetry}}"></paper-toggle-button>
      </paper-item>

      <paper-item class="clickable" on-click="openPrivacyPolicy" data-action="privacy-policy">
        <paper-item-body two-line="">
          <div>Privacy policy</div>
          <div secondary="true">Opens application privacy policy in a browser.</div>
        </paper-item-body>
        <iron-icon icon="arc:open-in-new" class="panel-icon" item-icon=""></iron-icon>
      </paper-item>
    </section>
`;
  }

  static get properties() {
    return {
      // If true then Google Analytics tracking is enabled.
      telemetry: {
        type: Boolean,
        notify: true,
        observer: '_telemetryChanged'
      },
      // A link to the privacy policy
      privacyPolicyUrl: {
        type: String,
        value: function() {
          let url = 'https://docs.google.com/document/d/';
          url += '1BzrKQ0NxFXuDIe2zMA-0SZBNU0P46MHr4GftZmoLUQU/edit';
          return url;
        }
      }
    };
  }

  // Opens privacy policy in a new window.
  openPrivacyPolicy() {
    this._openLink(this.privacyPolicyUrl);
  }

  _processValues(values) {
    if (typeof values.telemetry === 'undefined') {
      values.telemetry = true;
    } else {
      values.telemetry = this._boolValue(values.telemetry);
    }
    return values;
  }

  _setSettings(values) {
    this.__settingsRestored = false;
    this.telemetry = values.telemetry;
    this.__settingsRestored = true;
  }

  _telemetryChanged(value) {
    this.updateSetting('telemetry', value);
  }

  _settingsChanged(key, value) {
   this.__settingsRestored = false;
   switch (key) {
     case 'telemetry':
       this[key] = value;
       break;
   }
   this.__settingsRestored = true;
 }
}
window.customElements.define('arc-privacy-settings-panel', ArcPrivacySettingsPanel);
