/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-privacy-settings-panel.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {ArcSettingsPanelMixin} from '@advanced-rest-client/arc-settings-panel-mixin/arc-settings-panel-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

export {ArcPrivacySettingsPanel};

declare namespace UiElements {

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
   */
  class ArcPrivacySettingsPanel extends
    ArcSettingsPanelMixin(
    Object) {

    /**
     * If true then Google Analytics tracking is enabled.
     */
    telemetry: boolean|null|undefined;

    /**
     * A link to the privacy policy
     */
    privacyPolicyUrl: string|null|undefined;
    _processValues(values: any): any;
    _setSettings(values: any): void;

    /**
     * Opens privacy policy in a new window.
     */
    openPrivacyPolicy(): void;
    _telemetryChanged(value: any): void;
    _settingsChanged(key: any, value: any): void;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "arc-privacy-settings-panel": UiElements.ArcPrivacySettingsPanel;
  }
}
