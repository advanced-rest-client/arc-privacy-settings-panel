/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-privacy-settings-panel.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../paper-item/paper-item.d.ts" />
/// <reference path="../paper-item/paper-item-body.d.ts" />
/// <reference path="../paper-toggle-button/paper-toggle-button.d.ts" />
/// <reference path="../iron-icon/iron-icon.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../paper-styles/shadow.d.ts" />

declare namespace ApiElements {

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
  class ArcPrivacySettingsPanel extends Polymer.Element {

    /**
     * If true then Google Analytics tracking is enabled.
     */
    telemetry: boolean|null|undefined;

    /**
     * A link to the privacy policy
     */
    privacyPolicyUrl: string|null|undefined;
    _toggleOption(e: any): void;
    _cancelEvent(e: any): void;

    /**
     * Opens privacy policy in a new window.
     */
    openPrivacyPolicy(): void;
  }
}

interface HTMLElementTagNameMap {
  "arc-privacy-settings-panel": ApiElements.ArcPrivacySettingsPanel;
}