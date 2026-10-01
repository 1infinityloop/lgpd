/* @ds-bundle: {"format":3,"namespace":"LGPDPlayDesignSystem_cf0c13","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Accordion","sourcePath":"components/data-display/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ListGroup","sourcePath":"components/data-display/ListGroup.jsx"},{"name":"ListGroupItem","sourcePath":"components/data-display/ListGroup.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"CHECK_CSS","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FloatingLabel","sourcePath":"components/forms/FloatingLabel.jsx"},{"name":"FORM_CSS","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Dropdown","sourcePath":"components/navigation/Dropdown.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Modal","sourcePath":"components/overlays/Modal.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"02bda682e029","components/data-display/Accordion.jsx":"3e9186fe90ca","components/data-display/Avatar.jsx":"9caa8a237fa1","components/data-display/Card.jsx":"fe307f48285c","components/data-display/ListGroup.jsx":"8dc491c69030","components/data-display/Table.jsx":"15dc54414cbc","components/feedback/Alert.jsx":"1a6f94ec080e","components/feedback/Badge.jsx":"ad996fb1b210","components/feedback/Progress.jsx":"b6fb10ba2151","components/feedback/Spinner.jsx":"31fbb38d68fb","components/feedback/Toast.jsx":"19c44e52472b","components/feedback/Tooltip.jsx":"5d9489f29de8","components/forms/Checkbox.jsx":"75bdaf85a368","components/forms/FloatingLabel.jsx":"c7f8025eaa1d","components/forms/Input.jsx":"449541e30755","components/forms/Radio.jsx":"663ab3dd01fb","components/forms/Select.jsx":"c6071e17c303","components/forms/Switch.jsx":"ab1966ac7535","components/forms/Textarea.jsx":"89c63537c634","components/lib/inject.js":"cf4146208cfb","components/navigation/Breadcrumb.jsx":"388abef9d7f6","components/navigation/Dropdown.jsx":"da15562ec245","components/navigation/Nav.jsx":"8da6a9ec6a72","components/navigation/Navbar.jsx":"053b16fc9a19","components/navigation/Pagination.jsx":"8ec8b57bb8ac","components/overlays/Modal.jsx":"394bbe2aaeb3","ui_kits/auth/AuthScreens.jsx":"54b616ce5d32"},"inlinedExternals":[],"unexposedExports":[{"name":"cx","sourcePath":"components/lib/inject.js"},{"name":"injectStyle","sourcePath":"components/lib/inject.js"}]} */

(() => {

const __ds_ns = (window.LGPDPlayDesignSystem_cf0c13 = window.LGPDPlayDesignSystem_cf0c13 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/lib/inject.js
try { (() => {
// Idempotent <style> injector shared by LGPD Play components.
// Each component calls injectStyle(id, css) once at module load; the
// rule set is added to <head> a single time per id.
function injectStyle(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}

// Tiny classnames helper.
function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}
Object.assign(__ds_scope, { injectStyle, cx });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lib/inject.js", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-btn{
  --_bg: var(--bs-primary); --_fg: #000; --_bd: var(--bs-primary);
  --_hbg: #0e9c6c; --_hbd: #0d926a; --_abg: #0d926a; --_abd: #0c8a64;
  display:inline-flex; align-items:center; justify-content:center; gap:.5rem;
  font-family:var(--bs-font-sans-serif); font-size:1rem; font-weight:var(--font-weight-normal);
  line-height:1.5; text-align:center; text-decoration:none; white-space:nowrap;
  vertical-align:middle; cursor:pointer; user-select:none; border-radius:var(--bs-border-radius);
  padding:.375rem .75rem; border:var(--bs-border-width) solid var(--_bd);
  color:var(--_fg); background-color:var(--_bg);
  transition:color .15s,background-color .15s,border-color .15s,box-shadow .15s;
}
.lgpd-btn:hover{ color:var(--_fg); background-color:var(--_hbg); border-color:var(--_hbd); }
.lgpd-btn:active{ background-color:var(--_abg); border-color:var(--_abd); }
.lgpd-btn:focus-visible{ outline:0; box-shadow:0 0 0 .25rem rgba(var(--_ring,var(--bs-primary-rgb)),.4); }
.lgpd-btn:disabled,.lgpd-btn[aria-disabled="true"]{ opacity:.65; pointer-events:none; }

.lgpd-btn--secondary{ --_bg:var(--bs-secondary); --_fg:#fff; --_bd:var(--bs-secondary); --_hbg:#5c636a; --_hbd:#565e64; --_abg:#565e64; --_abd:#51585e; --_ring:var(--bs-secondary-rgb); }
.lgpd-btn--success{ --_bg:var(--bs-success); --_fg:#fff; --_bd:var(--bs-success); --_hbg:#157347; --_hbd:#146c43; --_abg:#146c43; --_abd:#13653f; --_ring:var(--bs-success-rgb); }
.lgpd-btn--danger{ --_bg:var(--bs-danger); --_fg:#fff; --_bd:var(--bs-danger); --_hbg:#bb2d3b; --_hbd:#b02a37; --_abg:#b02a37; --_abd:#a52834; --_ring:var(--bs-danger-rgb); }
.lgpd-btn--warning{ --_bg:var(--bs-warning); --_fg:#000; --_bd:var(--bs-warning); --_hbg:#ffca2c; --_hbd:#ffc720; --_abg:#ffcd39; --_abd:#ffc720; --_ring:var(--bs-warning-rgb); }
.lgpd-btn--info{ --_bg:var(--bs-info); --_fg:#000; --_bd:var(--bs-info); --_hbg:#31d2f2; --_hbd:#25cff2; --_abg:#3dd5f3; --_abd:#25cff2; --_ring:var(--bs-info-rgb); }
.lgpd-btn--light{ --_bg:var(--bs-light); --_fg:#000; --_bd:var(--bs-light); --_hbg:#d3d4d5; --_hbd:#c6c7c8; --_abg:#c6c7c8; --_abd:#babbbc; --_ring:var(--bs-light-rgb); }
.lgpd-btn--dark{ --_bg:var(--bs-dark); --_fg:#fff; --_bd:var(--bs-dark); --_hbg:#424649; --_hbd:#373b3e; --_abg:#4d5154; --_abd:#373b3e; --_ring:49,53,56; }
.lgpd-btn--link{ --_bg:transparent; --_bd:transparent; --_fg:var(--bs-link-color); --_hbg:transparent; --_hbd:transparent; --_abg:transparent; --_abd:transparent; text-decoration:underline; }
.lgpd-btn--link:hover{ color:var(--bs-link-hover-color); }

.lgpd-btn--outline{ background-color:transparent; color:var(--_obc,var(--bs-primary)); border-color:var(--_obc,var(--bs-primary)); }
.lgpd-btn--outline:hover{ background-color:var(--_obc,var(--bs-primary)); color:var(--_ofg,#000); border-color:var(--_obc,var(--bs-primary)); }
.lgpd-btn--outline.lgpd-btn--secondary{ --_obc:var(--bs-secondary); --_ofg:#fff; }
.lgpd-btn--outline.lgpd-btn--success{ --_obc:var(--bs-success); --_ofg:#fff; }
.lgpd-btn--outline.lgpd-btn--danger{ --_obc:var(--bs-danger); --_ofg:#fff; }
.lgpd-btn--outline.lgpd-btn--warning{ --_obc:var(--bs-warning); --_ofg:#000; }
.lgpd-btn--outline.lgpd-btn--info{ --_obc:var(--bs-info); --_ofg:#000; }
.lgpd-btn--outline.lgpd-btn--dark{ --_obc:var(--bs-dark); --_ofg:#fff; }

.lgpd-btn--sm{ padding:.25rem .5rem; font-size:.875rem; border-radius:var(--bs-border-radius-sm); }
.lgpd-btn--lg{ padding:.5rem 1rem; font-size:1.25rem; border-radius:var(--bs-border-radius-lg); }
.lgpd-btn--block{ display:flex; width:100%; }
`;

/**
 * LGPD Play primary action button. Bootstrap 5 button, themed green.
 */
function Button({
  variant = "primary",
  outline = false,
  size,
  block = false,
  type = "button",
  disabled = false,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-btn-css", CSS);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: __ds_scope.cx("lgpd-btn", `lgpd-btn--${variant}`, outline && "lgpd-btn--outline", size === "sm" && "lgpd-btn--sm", size === "lg" && "lgpd-btn--lg", block && "lgpd-btn--block", className)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-accordion{ border-radius:var(--bs-border-radius); }
.lgpd-accordion__item{ border:var(--bs-border-width) solid var(--bs-border-color); background-color:var(--bs-white); }
.lgpd-accordion__item:first-child{ border-top-left-radius:var(--bs-border-radius); border-top-right-radius:var(--bs-border-radius); }
.lgpd-accordion__item:last-child{ border-bottom-left-radius:var(--bs-border-radius); border-bottom-right-radius:var(--bs-border-radius); }
.lgpd-accordion__item + .lgpd-accordion__item{ border-top:0; }
.lgpd-accordion__header{
  display:flex; align-items:center; gap:.5rem; width:100%; padding:1rem 1.25rem;
  font-size:1rem; font-weight:var(--font-weight-medium); text-align:left; color:var(--bs-body-color);
  background:transparent; border:0; cursor:pointer;
}
.lgpd-accordion__header[aria-expanded="true"]{ color:var(--bs-primary-text-emphasis); background-color:var(--bs-primary-bg-subtle); box-shadow:inset 0 -1px 0 var(--bs-border-color); }
.lgpd-accordion__chev{ margin-left:auto; transition:transform .2s ease; }
.lgpd-accordion__header[aria-expanded="true"] .lgpd-accordion__chev{ transform:rotate(180deg); }
.lgpd-accordion__body{ padding:1rem 1.25rem; color:var(--bs-body-color); }
`;

/** Toggle a single item open. Bootstrap 5 accordion (controlled or self-managed). */
function Accordion({
  items = [],
  defaultOpen = 0,
  alwaysOpen = false,
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-accordion-css", CSS);
  const [open, setOpen] = React.useState(() => Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen]);
  const isOpen = i => open.includes(i);
  const toggle = i => {
    setOpen(cur => {
      if (cur.includes(i)) return cur.filter(x => x !== i);
      return alwaysOpen ? [...cur, i] : [i];
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx("lgpd-accordion", className)
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "lgpd-accordion__item",
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lgpd-accordion__header",
    "aria-expanded": isOpen(i),
    onClick: () => toggle(i)
  }, it.title, /*#__PURE__*/React.createElement("span", {
    className: "lgpd-accordion__chev",
    "aria-hidden": "true"
  }, "\u25BE")), isOpen(i) && /*#__PURE__*/React.createElement("div", {
    className: "lgpd-accordion__body"
  }, it.content))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-avatar{
  display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto;
  width:40px; height:40px; border-radius:50%; overflow:hidden;
  background-color:var(--bs-gray-200); color:var(--bs-gray-700);
  font-weight:var(--font-weight-medium); font-size:.95rem; vertical-align:middle;
  user-select:none;
}
.lgpd-avatar img{ width:100%; height:100%; object-fit:cover; }
.lgpd-avatar--square{ border-radius:var(--bs-border-radius); }
.lgpd-avatar--xs{ width:24px; height:24px; font-size:.7rem; }
.lgpd-avatar--sm{ width:32px; height:32px; font-size:.8rem; }
.lgpd-avatar--lg{ width:56px; height:56px; font-size:1.25rem; }
.lgpd-avatar--xl{ width:80px; height:80px; font-size:1.75rem; }
.lgpd-avatar--primary{ background-color:var(--bs-primary-bg-subtle); color:var(--bs-primary-text-emphasis); }
.lgpd-avatar-group{ display:inline-flex; }
.lgpd-avatar-group > .lgpd-avatar{ box-shadow:0 0 0 2px var(--bs-white); margin-left:-10px; }
.lgpd-avatar-group > .lgpd-avatar:first-child{ margin-left:0; }
`;

/** User image / initials. Bootstrap 5-style avatar. */
function Avatar({
  src,
  alt = "",
  initials,
  size,
  square = false,
  variant,
  className,
  style,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-avatar-css", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx("lgpd-avatar", size && `lgpd-avatar--${size}`, square && "lgpd-avatar--square", variant && `lgpd-avatar--${variant}`, className),
    style: style
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : initials);
}

/** Overlapping cluster of avatars. */
function AvatarGroup({
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-avatar-css", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx("lgpd-avatar-group", className)
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-card{
  display:flex; flex-direction:column; min-width:0; word-wrap:break-word;
  background-color:var(--surface-card); background-clip:border-box;
  border:var(--bs-border-width) solid var(--bs-border-color-translucent);
  border-radius:var(--bs-border-radius-lg);
}
.lgpd-card__img{ width:100%; display:block; border-top-left-radius:calc(var(--bs-border-radius-lg) - 1px); border-top-right-radius:calc(var(--bs-border-radius-lg) - 1px); object-fit:cover; }
.lgpd-card__header{ padding:.75rem 1rem; background-color:rgba(0,0,0,.03); border-bottom:var(--bs-border-width) solid var(--bs-border-color-translucent); font-weight:var(--font-weight-medium); }
.lgpd-card__body{ flex:1 1 auto; padding:1rem; }
.lgpd-card__title{ margin:0 0 .5rem; font-size:1.25rem; font-weight:var(--font-weight-medium); }
.lgpd-card__subtitle{ margin:-.25rem 0 .5rem; color:var(--bs-gray-600); font-size:.95rem; }
.lgpd-card__text{ margin:0 0 1rem; color:var(--bs-body-color); }
.lgpd-card__text:last-child{ margin-bottom:0; }
.lgpd-card__footer{ padding:.75rem 1rem; background-color:rgba(0,0,0,.03); border-top:var(--bs-border-width) solid var(--bs-border-color-translucent); color:var(--bs-gray-600); }
`;

/** Flexible content container. Bootstrap 5 card. */
function Card({
  image,
  imageAlt = "",
  header,
  title,
  subtitle,
  footer,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-card-css", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx("lgpd-card", className)
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    className: "lgpd-card__img",
    src: image,
    alt: imageAlt
  }), header && /*#__PURE__*/React.createElement("div", {
    className: "lgpd-card__header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "lgpd-card__body"
  }, title && /*#__PURE__*/React.createElement("h5", {
    className: "lgpd-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "lgpd-card__subtitle"
  }, subtitle), children), footer && /*#__PURE__*/React.createElement("div", {
    className: "lgpd-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ListGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-listgroup{ display:flex; flex-direction:column; padding-left:0; margin:0; border-radius:var(--bs-border-radius); list-style:none; }
.lgpd-listgroup__item{
  position:relative; display:flex; align-items:center; gap:.5rem; padding:.5rem 1rem;
  color:var(--bs-body-color); background-color:var(--bs-white);
  border:var(--bs-border-width) solid var(--bs-border-color-translucent);
}
.lgpd-listgroup__item + .lgpd-listgroup__item{ border-top-width:0; }
.lgpd-listgroup__item:first-child{ border-top-left-radius:inherit; border-top-right-radius:inherit; }
.lgpd-listgroup__item:last-child{ border-bottom-left-radius:inherit; border-bottom-right-radius:inherit; }
.lgpd-listgroup__item--action{ cursor:pointer; text-align:inherit; width:100%; }
.lgpd-listgroup__item--action:hover{ background-color:var(--bs-gray-100); }
.lgpd-listgroup__item--active{ color:#000; background-color:var(--bs-primary); border-color:var(--bs-primary); }
.lgpd-listgroup__item--disabled{ color:var(--bs-gray-500); pointer-events:none; background-color:var(--bs-white); }
`;

/** Vertical series of content. Bootstrap 5 list group. */
function ListGroup({
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-listgroup-css", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx("lgpd-listgroup", className)
  }, rest), children);
}

/** A single row within a ListGroup. */
function ListGroupItem({
  active = false,
  disabled = false,
  action = false,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-listgroup-css", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx("lgpd-listgroup__item", action && "lgpd-listgroup__item--action", active && "lgpd-listgroup__item--active", disabled && "lgpd-listgroup__item--disabled", className)
  }, rest), children);
}
Object.assign(__ds_scope, { ListGroup, ListGroupItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ListGroup.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-table{ width:100%; border-collapse:collapse; color:var(--bs-body-color); font-size:1rem; vertical-align:top; }
.lgpd-table > thead{ vertical-align:bottom; }
.lgpd-table th, .lgpd-table td{ padding:.5rem .5rem; border-bottom:var(--bs-border-width) solid var(--bs-border-color); text-align:left; }
.lgpd-table thead th{ font-weight:var(--font-weight-medium); color:var(--bs-gray-700); border-bottom-width:2px; }
.lgpd-table--striped tbody tr:nth-of-type(odd) td{ background-color:rgba(0,0,0,.03); }
.lgpd-table--hover tbody tr:hover td{ background-color:rgba(var(--bs-primary-rgb),.06); }
.lgpd-table--bordered th, .lgpd-table--bordered td{ border:var(--bs-border-width) solid var(--bs-border-color); }
.lgpd-table--sm th, .lgpd-table--sm td{ padding:.25rem .25rem; }
`;

/** Tabular data. Bootstrap 5 table wrapper. Compose <thead>/<tbody> as children. */
function Table({
  striped = false,
  hover = false,
  bordered = false,
  size,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-table-css", CSS);
  return /*#__PURE__*/React.createElement("table", _extends({
    className: __ds_scope.cx("lgpd-table", striped && "lgpd-table--striped", hover && "lgpd-table--hover", bordered && "lgpd-table--bordered", size === "sm" && "lgpd-table--sm", className)
  }, rest), children);
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-alert{
  position:relative; padding:1rem 1rem; margin-bottom:1rem;
  border:var(--bs-border-width) solid transparent; border-radius:var(--bs-border-radius);
  font-size:1rem; line-height:1.5;
}
.lgpd-alert__heading{ margin:0 0 .25rem; font-weight:var(--font-weight-medium); font-size:1.1rem; }
.lgpd-alert p:last-child{ margin-bottom:0; }
.lgpd-alert a{ font-weight:var(--font-weight-bold); }
.lgpd-alert--primary{ color:var(--bs-primary-text-emphasis); background:var(--bs-primary-bg-subtle); border-color:var(--bs-primary-border-subtle); }
.lgpd-alert--secondary{ color:var(--bs-secondary-text-emphasis); background:var(--bs-secondary-bg-subtle); border-color:var(--bs-secondary-border-subtle); }
.lgpd-alert--success{ color:var(--bs-success-text-emphasis); background:var(--bs-success-bg-subtle); border-color:var(--bs-success-border-subtle); }
.lgpd-alert--danger{ color:var(--bs-danger-text-emphasis); background:var(--bs-danger-bg-subtle); border-color:var(--bs-danger-border-subtle); }
.lgpd-alert--warning{ color:var(--bs-warning-text-emphasis); background:var(--bs-warning-bg-subtle); border-color:var(--bs-warning-border-subtle); }
.lgpd-alert--info{ color:var(--bs-info-text-emphasis); background:var(--bs-info-bg-subtle); border-color:var(--bs-info-border-subtle); }
.lgpd-alert__close{
  position:absolute; top:0; right:0; padding:1.1rem 1rem; background:transparent; border:0;
  cursor:pointer; font-size:1rem; line-height:1; opacity:.5; color:inherit;
}
.lgpd-alert__close:hover{ opacity:.9; }
`;

/** Contextual feedback message. Bootstrap 5 alert. */
function Alert({
  variant = "primary",
  heading,
  dismissible = false,
  onClose,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-alert-css", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: __ds_scope.cx("lgpd-alert", `lgpd-alert--${variant}`, className)
  }, rest), heading && /*#__PURE__*/React.createElement("div", {
    className: "lgpd-alert__heading"
  }, heading), children, dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    className: "lgpd-alert__close",
    onClick: onClose
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-badge{
  display:inline-block; padding:.35em .65em; font-size:.75em; font-weight:var(--font-weight-bold);
  line-height:1; text-align:center; white-space:nowrap; vertical-align:baseline;
  border-radius:var(--bs-border-radius-sm); color:#000; background-color:var(--bs-primary);
}
.lgpd-badge--pill{ border-radius:var(--bs-border-radius-pill); }
.lgpd-badge--primary{ background-color:var(--bs-primary); color:#000; }
.lgpd-badge--secondary{ background-color:var(--bs-secondary); color:#fff; }
.lgpd-badge--success{ background-color:var(--bs-success); color:#fff; }
.lgpd-badge--danger{ background-color:var(--bs-danger); color:#fff; }
.lgpd-badge--warning{ background-color:var(--bs-warning); color:#000; }
.lgpd-badge--info{ background-color:var(--bs-info); color:#000; }
.lgpd-badge--light{ background-color:var(--bs-light); color:#000; }
.lgpd-badge--dark{ background-color:var(--bs-dark); color:#fff; }
/* subtle (soft) treatment */
.lgpd-badge--subtle.lgpd-badge--primary{ background-color:var(--bs-primary-bg-subtle); color:var(--bs-primary-text-emphasis); }
.lgpd-badge--subtle.lgpd-badge--secondary{ background-color:var(--bs-secondary-bg-subtle); color:var(--bs-secondary-text-emphasis); }
.lgpd-badge--subtle.lgpd-badge--success{ background-color:var(--bs-success-bg-subtle); color:var(--bs-success-text-emphasis); }
.lgpd-badge--subtle.lgpd-badge--danger{ background-color:var(--bs-danger-bg-subtle); color:var(--bs-danger-text-emphasis); }
.lgpd-badge--subtle.lgpd-badge--warning{ background-color:var(--bs-warning-bg-subtle); color:var(--bs-warning-text-emphasis); }
.lgpd-badge--subtle.lgpd-badge--info{ background-color:var(--bs-info-bg-subtle); color:var(--bs-info-text-emphasis); }
`;

/** Small count / status label. Bootstrap 5 badge. */
function Badge({
  variant = "primary",
  pill = false,
  subtle = false,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-badge-css", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx("lgpd-badge", `lgpd-badge--${variant}`, pill && "lgpd-badge--pill", subtle && "lgpd-badge--subtle", className)
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-progress{
  display:flex; height:1rem; overflow:hidden; font-size:.75rem;
  background-color:var(--bs-gray-200); border-radius:var(--bs-border-radius);
}
.lgpd-progress__bar{
  display:flex; flex-direction:column; justify-content:center; overflow:hidden;
  color:#fff; text-align:center; white-space:nowrap; background-color:var(--bs-primary);
  transition:width .6s ease;
}
.lgpd-progress__bar--striped{
  background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
  background-size:1rem 1rem;
}
@keyframes lgpd-progress-stripes{ 0%{ background-position-x:1rem; } }
.lgpd-progress__bar--animated{ animation:lgpd-progress-stripes 1s linear infinite; }
`;

/** Determinate progress bar. Bootstrap 5 progress. */
function Progress({
  value = 0,
  max = 100,
  variant = "primary",
  striped = false,
  animated = false,
  label = false,
  className,
  style,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-progress-css", CSS);
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx("lgpd-progress", className),
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("lgpd-progress__bar", striped && "lgpd-progress__bar--striped", animated && "lgpd-progress__bar--animated"),
    style: {
      width: `${pct}%`,
      backgroundColor: `var(--bs-${variant})`
    }
  }, label && `${Math.round(pct)}%`));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
@keyframes lgpd-spin{ to{ transform:rotate(360deg); } }
@keyframes lgpd-grow{ 0%{ transform:scale(0); } 50%{ opacity:1; transform:none; } }
.lgpd-spinner{
  display:inline-block; width:2rem; height:2rem; vertical-align:-.125em;
  border:.25em solid currentColor; border-right-color:transparent; border-radius:50%;
  animation:lgpd-spin .75s linear infinite; color:var(--bs-primary);
}
.lgpd-spinner--grow{
  border:0; background-color:currentColor; opacity:0; animation:lgpd-grow .75s linear infinite;
}
.lgpd-spinner--sm{ width:1rem; height:1rem; border-width:.2em; }
`;

/** Loading indicator. Bootstrap 5 spinner (border or grow). */
function Spinner({
  variant = "primary",
  type = "border",
  size,
  className,
  style,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-spinner-css", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": "Loading",
    className: __ds_scope.cx("lgpd-spinner", type === "grow" && "lgpd-spinner--grow", size === "sm" && "lgpd-spinner--sm", className),
    style: {
      color: `var(--bs-${variant})`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-toast{
  width:350px; max-width:100%; font-size:.875rem; background-color:rgba(255,255,255,.95);
  background-clip:padding-box; border:1px solid var(--bs-border-color-translucent);
  box-shadow:var(--bs-box-shadow); border-radius:var(--bs-border-radius); overflow:hidden;
}
.lgpd-toast__header{
  display:flex; align-items:center; gap:.5rem; padding:.5rem .75rem; color:var(--bs-gray-600);
  background-color:rgba(255,255,255,.85); border-bottom:1px solid var(--bs-border-color-translucent);
}
.lgpd-toast__title{ font-weight:var(--font-weight-medium); color:var(--bs-body-color); margin-right:auto; }
.lgpd-toast__dot{ width:.75rem; height:.75rem; border-radius:2px; background-color:var(--bs-primary); }
.lgpd-toast__time{ font-size:.8125rem; color:var(--bs-gray-600); }
.lgpd-toast__close{ background:transparent; border:0; cursor:pointer; opacity:.5; font-size:1rem; line-height:1; padding:.1rem .25rem; }
.lgpd-toast__close:hover{ opacity:.9; }
.lgpd-toast__body{ padding:.75rem; color:var(--bs-body-color); }
`;

/** Lightweight notification. Bootstrap 5 toast (static presentation). */
function Toast({
  title = "LGPD Play",
  time = "now",
  accent = "primary",
  onClose,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-toast-css", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx("lgpd-toast", className),
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lgpd-toast__header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lgpd-toast__dot",
    style: {
      backgroundColor: `var(--bs-${accent})`
    }
  }), /*#__PURE__*/React.createElement("strong", {
    className: "lgpd-toast__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "lgpd-toast__time"
  }, time), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    className: "lgpd-toast__close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "lgpd-toast__body"
  }, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-tooltip-wrap{ position:relative; display:inline-flex; }
.lgpd-tooltip{
  position:absolute; z-index:1080; padding:.25rem .5rem; font-size:.875rem; color:#fff;
  background-color:#000; border-radius:var(--bs-border-radius-sm); white-space:nowrap;
  opacity:0; pointer-events:none; transition:opacity .15s; line-height:1.4;
}
.lgpd-tooltip-wrap:hover .lgpd-tooltip,
.lgpd-tooltip-wrap:focus-within .lgpd-tooltip{ opacity:.9; }
.lgpd-tooltip::after{ content:""; position:absolute; border:5px solid transparent; }
.lgpd-tooltip--top{ bottom:calc(100% + 6px); left:50%; transform:translateX(-50%); }
.lgpd-tooltip--top::after{ top:100%; left:50%; margin-left:-5px; border-top-color:#000; }
.lgpd-tooltip--bottom{ top:calc(100% + 6px); left:50%; transform:translateX(-50%); }
.lgpd-tooltip--bottom::after{ bottom:100%; left:50%; margin-left:-5px; border-bottom-color:#000; }
.lgpd-tooltip--right{ left:calc(100% + 6px); top:50%; transform:translateY(-50%); }
.lgpd-tooltip--right::after{ right:100%; top:50%; margin-top:-5px; border-right-color:#000; }
.lgpd-tooltip--left{ right:calc(100% + 6px); top:50%; transform:translateY(-50%); }
.lgpd-tooltip--left::after{ left:100%; top:50%; margin-top:-5px; border-left-color:#000; }
`;

/** Hover hint. Bootstrap 5 tooltip (CSS-driven, shows on hover/focus). */
function Tooltip({
  text,
  placement = "top",
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-tooltip-css", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx("lgpd-tooltip-wrap", className),
    tabIndex: 0
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx("lgpd-tooltip", `lgpd-tooltip--${placement}`),
    role: "tooltip"
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CHECK_CSS = `
.lgpd-check{ display:flex; align-items:center; gap:.5rem; min-height:1.5rem; margin-bottom:.25rem; }
.lgpd-check__input{
  flex:0 0 auto; width:1em; height:1em; margin:0; vertical-align:top; appearance:none;
  background-color:var(--bs-white); background-repeat:no-repeat; background-position:center; background-size:contain;
  border:1px solid var(--bs-gray-400); cursor:pointer; transition:background-color .15s, border-color .15s, box-shadow .15s;
}
.lgpd-check__input[type=checkbox]{ border-radius:.25em; }
.lgpd-check__input[type=radio]{ border-radius:50%; }
.lgpd-check__input:focus-visible{ outline:0; border-color:#88dbbf; box-shadow:0 0 0 .25rem rgba(var(--bs-primary-rgb),.25); }
.lgpd-check__input:checked{ background-color:var(--bs-primary); border-color:var(--bs-primary); }
.lgpd-check__input[type=checkbox]:checked{ background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E"); }
.lgpd-check__input[type=radio]:checked{ background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23000'/%3E%3C/svg%3E"); }
.lgpd-check__input:disabled{ opacity:.5; cursor:default; }
.lgpd-check__label{ font-size:1rem; color:var(--bs-body-color); cursor:pointer; }
.lgpd-check__input:disabled ~ .lgpd-check__label{ opacity:.5; cursor:default; }

/* Switch */
.lgpd-switch .lgpd-check__input{
  width:2em; border-radius:2em;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23adb5bd'/%3E%3C/svg%3E");
  background-position:left center; transition:background-position .15s ease-in-out, background-color .15s;
}
.lgpd-switch .lgpd-check__input:checked{
  background-position:right center;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
}
`;

/** Checkbox with label. Bootstrap 5 form check. */
function Checkbox({
  label,
  id,
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-check-css", CHECK_CSS);
  const autoId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("lgpd-check", className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: autoId,
    className: "lgpd-check__input"
  }, rest)), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: autoId,
    className: "lgpd-check__label"
  }, label));
}
Object.assign(__ds_scope, { CHECK_CSS, Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FORM_CSS = `
.lgpd-label{ display:inline-block; margin-bottom:.5rem; font-weight:var(--font-weight-medium); font-size:1rem; color:var(--bs-body-color); }
.lgpd-label .req{ color:var(--bs-danger); margin-left:.15rem; }
.lgpd-control{
  display:block; width:100%; padding:.375rem .75rem; font-size:1rem; font-family:inherit;
  font-weight:400; line-height:1.5; color:var(--bs-body-color); background-color:var(--bs-white);
  background-clip:padding-box; border:var(--bs-border-width) solid var(--bs-gray-400);
  border-radius:var(--bs-border-radius); appearance:none;
  transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.lgpd-control::placeholder{ color:var(--bs-gray-500); opacity:1; }
.lgpd-control:focus{ outline:0; border-color:#88dbbf; box-shadow:0 0 0 .25rem rgba(var(--bs-primary-rgb),.25); }
.lgpd-control:disabled{ background-color:var(--bs-gray-200); opacity:1; }
.lgpd-control--sm{ padding:.25rem .5rem; font-size:.875rem; border-radius:var(--bs-border-radius-sm); }
.lgpd-control--lg{ padding:.5rem 1rem; font-size:1.25rem; border-radius:var(--bs-border-radius-lg); }
.lgpd-control.is-invalid{ border-color:var(--bs-danger); }
.lgpd-control.is-invalid:focus{ box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25); }
.lgpd-control.is-valid{ border-color:var(--bs-success); }
.lgpd-control.is-valid:focus{ box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25); }
.lgpd-help{ margin-top:.25rem; font-size:.875rem; color:var(--bs-gray-600); }
.lgpd-help--invalid{ color:var(--bs-danger); }
.lgpd-help--valid{ color:var(--bs-success); }
.lgpd-field{ margin-bottom:1rem; }
`;

/** Text input with optional label + help text. Bootstrap 5 form control. */
function Input({
  label,
  required = false,
  help,
  state,
  size,
  id,
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-form-css", FORM_CSS);
  const autoId = id || (label ? `in-${String(label).toLowerCase().replace(/\s+/g, "-")}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "lgpd-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lgpd-label",
    htmlFor: autoId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: autoId,
    className: __ds_scope.cx("lgpd-control", size && `lgpd-control--${size}`, state === "invalid" && "is-invalid", state === "valid" && "is-valid", className)
  }, rest)), help && /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("lgpd-help", state === "invalid" && "lgpd-help--invalid", state === "valid" && "lgpd-help--valid")
  }, help));
}
Object.assign(__ds_scope, { FORM_CSS, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/FloatingLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FLOAT_CSS = `
.lgpd-floating{ position:relative; }
.lgpd-floating > .lgpd-control{ height:calc(3.5rem + 2px); padding:1rem .75rem; }
.lgpd-floating > .lgpd-control::placeholder{ color:transparent; }
.lgpd-floating > label{
  position:absolute; top:0; left:0; height:100%; padding:1rem .75rem; margin:0;
  pointer-events:none; transform-origin:0 0; color:var(--bs-gray-600);
  transition:opacity .1s ease-in-out, transform .1s ease-in-out; font-weight:400;
}
.lgpd-floating > .lgpd-control:focus ~ label,
.lgpd-floating > .lgpd-control:not(:placeholder-shown) ~ label{
  transform:scale(.85) translateY(-.5rem) translateX(.15rem); opacity:.75;
}
`;

/** Input with a label that floats above on focus/fill. Bootstrap 5 floating label. */
function FloatingLabel({
  label,
  id,
  type = "text",
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-form-css", __ds_scope.FORM_CSS);
  __ds_scope.injectStyle("lgpd-floating-css", FLOAT_CSS);
  const autoId = id || `fl-${String(label || "").toLowerCase().replace(/\s+/g, "-")}`;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("lgpd-floating", className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: autoId,
    type: type,
    className: "lgpd-control",
    placeholder: " "
  }, rest)), /*#__PURE__*/React.createElement("label", {
    htmlFor: autoId
  }, label));
}
Object.assign(__ds_scope, { FloatingLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FloatingLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio with label. Bootstrap 5 form check. Group by shared `name`. */
function Radio({
  label,
  id,
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-check-css", __ds_scope.CHECK_CSS);
  const autoId = id || `rb-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("lgpd-check", className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: autoId,
    className: "lgpd-check__input"
  }, rest)), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: autoId,
    className: "lgpd-check__label"
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SELECT_CSS = `
.lgpd-select{
  padding-right:2.25rem;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat:no-repeat; background-position:right .75rem center; background-size:16px 12px;
}
`;

/** Native select with label. Bootstrap 5 form select. */
function Select({
  label,
  required = false,
  help,
  state,
  size,
  id,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-form-css", __ds_scope.FORM_CSS);
  __ds_scope.injectStyle("lgpd-select-css", SELECT_CSS);
  const autoId = id || (label ? `sel-${String(label).toLowerCase().replace(/\s+/g, "-")}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "lgpd-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lgpd-label",
    htmlFor: autoId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("select", _extends({
    id: autoId,
    className: __ds_scope.cx("lgpd-control", "lgpd-select", size && `lgpd-control--${size}`, state === "invalid" && "is-invalid", state === "valid" && "is-valid", className)
  }, rest), children), help && /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("lgpd-help", state === "invalid" && "lgpd-help--invalid")
  }, help));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch with label. Bootstrap 5 switch (checkbox styled as a switch). */
function Switch({
  label,
  id,
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-check-css", __ds_scope.CHECK_CSS);
  const autoId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("lgpd-check", "lgpd-switch", className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: autoId,
    className: "lgpd-check__input"
  }, rest)), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: autoId,
    className: "lgpd-check__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input with label. Bootstrap 5 textarea. */
function Textarea({
  label,
  required = false,
  help,
  state,
  rows = 3,
  id,
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-form-css", __ds_scope.FORM_CSS);
  const autoId = id || (label ? `ta-${String(label).toLowerCase().replace(/\s+/g, "-")}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "lgpd-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lgpd-label",
    htmlFor: autoId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: autoId,
    rows: rows,
    className: __ds_scope.cx("lgpd-control", state === "invalid" && "is-invalid", state === "valid" && "is-valid", className)
  }, rest)), help && /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("lgpd-help", state === "invalid" && "lgpd-help--invalid")
  }, help));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-breadcrumb{ display:flex; flex-wrap:wrap; align-items:center; gap:0; padding:0; margin:0; list-style:none; font-size:1rem; }
.lgpd-breadcrumb__item{ display:flex; align-items:center; color:var(--bs-gray-600); }
.lgpd-breadcrumb__item + .lgpd-breadcrumb__item::before{ content:var(--lgpd-bc-divider,"/"); padding:0 .5rem; color:var(--bs-gray-500); }
.lgpd-breadcrumb__item a{ color:var(--bs-link-color); text-decoration:none; }
.lgpd-breadcrumb__item a:hover{ text-decoration:underline; }
.lgpd-breadcrumb__item--active{ color:var(--bs-gray-600); }
`;

/** Page hierarchy trail. Bootstrap 5 breadcrumb. */
function Breadcrumb({
  items = [],
  divider = "/",
  className,
  style,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-breadcrumb-css", CSS);
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "breadcrumb"
  }, rest), /*#__PURE__*/React.createElement("ol", {
    className: __ds_scope.cx("lgpd-breadcrumb", className),
    style: {
      "--lgpd-bc-divider": `"${divider}"`,
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: __ds_scope.cx("lgpd-breadcrumb__item", last && "lgpd-breadcrumb__item--active"),
      "aria-current": last ? "page" : undefined
    }, last || !it.href ? it.label : /*#__PURE__*/React.createElement("a", {
      href: it.href
    }, it.label));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Dropdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-dropdown{ position:relative; display:inline-block; }
.lgpd-dropdown__toggle{ display:inline-flex; align-items:center; gap:.4rem; }
.lgpd-dropdown__toggle::after{ content:""; display:inline-block; width:0; height:0; margin-left:.25rem; vertical-align:middle; border-top:.3em solid; border-right:.3em solid transparent; border-left:.3em solid transparent; }
.lgpd-dropdown__menu{
  position:absolute; top:calc(100% + .125rem); left:0; z-index:1000; min-width:11rem; padding:.5rem 0; margin:0;
  background-color:var(--bs-white); border:var(--bs-border-width) solid var(--bs-border-color-translucent);
  border-radius:var(--bs-border-radius); box-shadow:var(--bs-box-shadow); list-style:none;
}
.lgpd-dropdown__menu--end{ left:auto; right:0; }
.lgpd-dropdown__item{
  display:flex; align-items:center; gap:.5rem; width:100%; padding:.375rem 1rem; clear:both;
  font-size:1rem; font-weight:400; color:var(--bs-body-color); text-align:inherit; text-decoration:none;
  background:transparent; border:0; cursor:pointer; white-space:nowrap;
}
.lgpd-dropdown__item:hover{ background-color:var(--bs-gray-100); }
.lgpd-dropdown__item--active{ color:#000; background-color:var(--bs-primary); }
.lgpd-dropdown__item:disabled{ color:var(--bs-gray-500); pointer-events:none; }
.lgpd-dropdown__header{ display:block; padding:.5rem 1rem; font-size:.875rem; color:var(--bs-gray-600); white-space:nowrap; }
.lgpd-dropdown__divider{ height:0; margin:.5rem 0; border-top:1px solid var(--bs-border-color); }
`;

/** Toggleable menu. Bootstrap 5 dropdown (self-managed open state). */
function Dropdown({
  label = "Menu",
  items = [],
  align = "start",
  onSelect,
  className,
  trigger,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-dropdown-css", CSS);
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx("lgpd-dropdown", className),
    ref: ref
  }, rest), trigger ? React.cloneElement(trigger, {
    onClick: () => setOpen(o => !o),
    "aria-expanded": open
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lgpd-btn lgpd-btn--secondary lgpd-dropdown__toggle",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, label), open && /*#__PURE__*/React.createElement("ul", {
    className: __ds_scope.cx("lgpd-dropdown__menu", align === "end" && "lgpd-dropdown__menu--end")
  }, items.map((it, i) => {
    if (it.divider) return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "lgpd-dropdown__divider"
    }));
    if (it.header) return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "lgpd-dropdown__header"
    }, it.header));
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: __ds_scope.cx("lgpd-dropdown__item", it.active && "lgpd-dropdown__item--active"),
      disabled: it.disabled,
      onClick: () => {
        setOpen(false);
        onSelect && onSelect(it.value ?? it.label);
      }
    }, it.label));
  })));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-nav{ display:flex; flex-wrap:wrap; gap:0; padding-left:0; margin:0; list-style:none; }
.lgpd-nav__link{
  display:block; padding:.5rem 1rem; color:var(--bs-link-color); text-decoration:none; cursor:pointer;
  background:transparent; border:0; font-size:1rem; transition:color .15s, background-color .15s, border-color .15s;
}
.lgpd-nav__link:hover{ color:var(--bs-link-hover-color); }
.lgpd-nav__link--disabled{ color:var(--bs-gray-500); pointer-events:none; }

/* Tabs */
.lgpd-nav--tabs{ border-bottom:var(--bs-border-width) solid var(--bs-border-color); }
.lgpd-nav--tabs .lgpd-nav__link{ margin-bottom:-1px; border:1px solid transparent; border-top-left-radius:var(--bs-border-radius); border-top-right-radius:var(--bs-border-radius); }
.lgpd-nav--tabs .lgpd-nav__link:hover{ border-color:var(--bs-gray-200) var(--bs-gray-200) var(--bs-border-color); }
.lgpd-nav--tabs .lgpd-nav__link--active{ color:var(--bs-gray-700); background-color:var(--bs-white); border-color:var(--bs-border-color) var(--bs-border-color) var(--bs-white); font-weight:var(--font-weight-medium); }

/* Pills */
.lgpd-nav--pills .lgpd-nav__link{ border-radius:var(--bs-border-radius); }
.lgpd-nav--pills .lgpd-nav__link--active{ color:#000; background-color:var(--bs-primary); font-weight:var(--font-weight-medium); }
`;

/** Tabbed / pill navigation. Bootstrap 5 nav. */
function Nav({
  items = [],
  activeKey,
  onSelect,
  variant = "tabs",
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-nav-css", CSS);
  const active = activeKey ?? items[0]?.key;
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: __ds_scope.cx("lgpd-nav", variant === "pills" ? "lgpd-nav--pills" : variant === "tabs" ? "lgpd-nav--tabs" : null, className)
  }, rest), items.map(it => /*#__PURE__*/React.createElement("li", {
    className: "lgpd-nav__item",
    key: it.key
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: __ds_scope.cx("lgpd-nav__link", it.key === active && "lgpd-nav__link--active", it.disabled && "lgpd-nav__link--disabled"),
    "aria-current": it.key === active ? "page" : undefined,
    onClick: () => onSelect && onSelect(it.key)
  }, it.label))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-navbar{
  display:flex; align-items:center; gap:1rem; width:100%; padding:.5rem 1rem;
  background-color:var(--bs-white); border-bottom:1px solid var(--bs-border-color);
}
.lgpd-navbar--dark{ background-color:var(--lgpd-navy); border-bottom-color:rgba(255,255,255,.1); }
.lgpd-navbar__brand{ display:flex; align-items:center; gap:.5rem; font-size:1.25rem; font-weight:var(--font-weight-bold); color:var(--bs-body-color); text-decoration:none; margin-right:.5rem; }
.lgpd-navbar--dark .lgpd-navbar__brand{ color:#fff; }
.lgpd-navbar__brand img{ height:30px; width:auto; display:block; }
.lgpd-navbar__nav{ display:flex; align-items:center; gap:.25rem; list-style:none; margin:0; padding:0; }
.lgpd-navbar__link{
  padding:.5rem .75rem; color:var(--bs-gray-700); text-decoration:none; border-radius:var(--bs-border-radius);
  font-size:1rem; transition:color .15s, background-color .15s;
}
.lgpd-navbar__link:hover{ color:var(--bs-primary-text-emphasis); }
.lgpd-navbar__link--active{ color:var(--bs-primary-text-emphasis); font-weight:var(--font-weight-medium); }
.lgpd-navbar--dark .lgpd-navbar__link{ color:rgba(255,255,255,.75); }
.lgpd-navbar--dark .lgpd-navbar__link:hover,
.lgpd-navbar--dark .lgpd-navbar__link--active{ color:#fff; }
.lgpd-navbar__spacer{ margin-left:auto; }
.lgpd-navbar__actions{ display:flex; align-items:center; gap:.5rem; }
`;

/** Top navigation bar. Bootstrap 5 navbar, LGPD Play branded. */
function Navbar({
  brand = "LGPD Play",
  brandSrc,
  links = [],
  activeKey,
  onSelect,
  actions,
  dark = false,
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-navbar-css", CSS);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: __ds_scope.cx("lgpd-navbar", dark && "lgpd-navbar--dark", className)
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "lgpd-navbar__brand",
    href: "#"
  }, brandSrc ? /*#__PURE__*/React.createElement("img", {
    src: brandSrc,
    alt: typeof brand === "string" ? brand : "LGPD Play"
  }) : brand), /*#__PURE__*/React.createElement("ul", {
    className: "lgpd-navbar__nav"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.key
  }, /*#__PURE__*/React.createElement("a", {
    className: __ds_scope.cx("lgpd-navbar__link", l.key === activeKey && "lgpd-navbar__link--active"),
    href: l.href || "#",
    "aria-current": l.key === activeKey ? "page" : undefined,
    onClick: e => {
      if (onSelect) {
        e.preventDefault();
        onSelect(l.key);
      }
    }
  }, l.label)))), actions && /*#__PURE__*/React.createElement("div", {
    className: "lgpd-navbar__spacer lgpd-navbar__actions"
  }, actions));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-pagination{ display:inline-flex; padding:0; margin:0; list-style:none; border-radius:var(--bs-border-radius); }
.lgpd-pagination__link{
  display:flex; align-items:center; justify-content:center; min-width:2.5rem; padding:.375rem .75rem;
  color:var(--bs-link-color); background-color:var(--bs-white); border:var(--bs-border-width) solid var(--bs-border-color);
  cursor:pointer; text-decoration:none; font-size:1rem; margin-left:-1px; transition:background-color .15s, color .15s;
}
.lgpd-pagination__item:first-child .lgpd-pagination__link{ margin-left:0; border-top-left-radius:var(--bs-border-radius); border-bottom-left-radius:var(--bs-border-radius); }
.lgpd-pagination__item:last-child .lgpd-pagination__link{ border-top-right-radius:var(--bs-border-radius); border-bottom-right-radius:var(--bs-border-radius); }
.lgpd-pagination__link:hover{ background-color:var(--bs-gray-100); color:var(--bs-link-hover-color); }
.lgpd-pagination__item--active .lgpd-pagination__link{ z-index:1; color:#000; background-color:var(--bs-primary); border-color:var(--bs-primary); }
.lgpd-pagination__item--disabled .lgpd-pagination__link{ color:var(--bs-gray-500); pointer-events:none; background-color:var(--bs-white); }
.lgpd-pagination--sm .lgpd-pagination__link{ min-width:2rem; padding:.25rem .5rem; font-size:.875rem; }
`;

/** Page navigation control. Bootstrap 5 pagination. */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  size,
  className,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-pagination-css", CSS);
  const go = p => onChange && p >= 1 && p <= total && p !== page && onChange(p);
  const pages = Array.from({
    length: total
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "pagination"
  }, rest), /*#__PURE__*/React.createElement("ul", {
    className: __ds_scope.cx("lgpd-pagination", size === "sm" && "lgpd-pagination--sm", className)
  }, /*#__PURE__*/React.createElement("li", {
    className: __ds_scope.cx("lgpd-pagination__item", page === 1 && "lgpd-pagination__item--disabled")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lgpd-pagination__link",
    onClick: () => go(page - 1),
    "aria-label": "Previous"
  }, "\u2039")), pages.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    className: __ds_scope.cx("lgpd-pagination__item", p === page && "lgpd-pagination__item--active")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lgpd-pagination__link",
    "aria-current": p === page ? "page" : undefined,
    onClick: () => go(p)
  }, p))), /*#__PURE__*/React.createElement("li", {
    className: __ds_scope.cx("lgpd-pagination__item", page === total && "lgpd-pagination__item--disabled")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lgpd-pagination__link",
    onClick: () => go(page + 1),
    "aria-label": "Next"
  }, "\u203A"))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lgpd-modal__backdrop{ position:fixed; inset:0; z-index:1050; background-color:rgba(0,0,0,.5); display:flex; align-items:flex-start; justify-content:center; padding:1.75rem 1rem; overflow:auto; }
.lgpd-modal{
  position:relative; z-index:1055; width:100%; max-width:500px; margin-top:1.75rem;
  background-color:var(--bs-white); border:1px solid var(--bs-border-color-translucent);
  border-radius:var(--bs-border-radius-lg); box-shadow:var(--bs-box-shadow-lg);
  display:flex; flex-direction:column;
}
.lgpd-modal--sm{ max-width:300px; }
.lgpd-modal--lg{ max-width:800px; }
.lgpd-modal__header{ display:flex; align-items:center; padding:1rem 1rem; border-bottom:1px solid var(--bs-border-color); }
.lgpd-modal__title{ margin:0; font-size:1.25rem; font-weight:var(--font-weight-medium); }
.lgpd-modal__close{ margin-left:auto; background:transparent; border:0; font-size:1.25rem; line-height:1; cursor:pointer; opacity:.6; padding:.25rem; }
.lgpd-modal__close:hover{ opacity:1; }
.lgpd-modal__body{ position:relative; padding:1rem; }
.lgpd-modal__footer{ display:flex; flex-wrap:wrap; align-items:center; justify-content:flex-end; gap:.5rem; padding:.75rem 1rem; border-top:1px solid var(--bs-border-color); }
`;

/** Dialog overlay. Bootstrap 5 modal. Render only when open. */
function Modal({
  open = true,
  title,
  onClose,
  footer,
  size,
  className,
  children,
  ...rest
}) {
  __ds_scope.injectStyle("lgpd-modal-css", CSS);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "lgpd-modal__backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx("lgpd-modal", size && `lgpd-modal--${size}`, className),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), (title || onClose) && /*#__PURE__*/React.createElement("div", {
    className: "lgpd-modal__header"
  }, title && /*#__PURE__*/React.createElement("h5", {
    className: "lgpd-modal__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lgpd-modal__close",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "lgpd-modal__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "lgpd-modal__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Modal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auth/AuthScreens.jsx
try { (() => {
// LGPD Play — Auth screens (Login + Signup).
// Composes design-system primitives from window.LGPDPlayDesignSystem_cf0c13.
// Exposes LoginCard, SignupCard, SuccessCard on window.
(function () {
  const NS = window.LGPDPlayDesignSystem_cf0c13;
  const {
    Button,
    Input,
    Checkbox,
    Alert
  } = NS;
  const LOGO = "../../assets/lgpd-play-logo.png";
  function Brand() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "LGPD Play",
      style: {
        height: 56,
        width: "auto"
      }
    }));
  }
  function GoogleButton({
    children
  }) {
    return /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      outline: true,
      block: true,
      type: "button"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: "inline-flex",
        width: 18,
        height: 18,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontFamily: "var(--bs-font-monospace)",
        color: "#fff",
        background: "conic-gradient(from -45deg, #ea4335 0 25%, #fbbc05 0 50%, #34a853 0 75%, #4285f4 0)"
      }
    }, "G"), children);
  }
  function Foot({
    prompt,
    action,
    onAction
  }) {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center",
        margin: "20px 0 0",
        color: "var(--bs-gray-600)"
      }
    }, prompt, " ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onAction();
      },
      style: {
        fontWeight: 600,
        textDecoration: "none"
      }
    }, action));
  }
  function LoginCard({
    onSignup,
    onSubmit
  }) {
    const [err, setErr] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      className: "auth-card"
    }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "1.75rem",
        textAlign: "center",
        margin: "0 0 6px"
      }
    }, "Acesse sua conta"), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center",
        color: "var(--bs-gray-600)",
        margin: "0 0 24px"
      }
    }, "Bem-vindo de volta! Entre para continuar seus treinamentos."), err && /*#__PURE__*/React.createElement(Alert, {
      variant: "danger"
    }, "E-mail ou senha incorretos. Tente novamente."), /*#__PURE__*/React.createElement(Input, {
      label: "E-mail",
      type: "email",
      required: true,
      placeholder: "voce@empresa.com.br",
      defaultValue: "ana.costa@empresa.com.br"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Senha",
      type: "password",
      required: true,
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      defaultValue: "senha123"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "-4px 0 18px"
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Lembrar de mim",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        fontWeight: 600,
        textDecoration: "none",
        fontSize: 14
      }
    }, "Esqueci minha senha")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      onClick: () => onSubmit()
    }, "Entrar"), /*#__PURE__*/React.createElement(GoogleButton, null, "Continuar com Google")), /*#__PURE__*/React.createElement(Foot, {
      prompt: "N\xE3o tem uma conta?",
      action: "Criar conta",
      onAction: onSignup
    }));
  }
  function SignupCard({
    onLogin,
    onSubmit
  }) {
    const [agreed, setAgreed] = React.useState(true);
    return /*#__PURE__*/React.createElement("div", {
      className: "auth-card"
    }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "1.75rem",
        textAlign: "center",
        margin: "0 0 6px"
      }
    }, "Criar sua conta"), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center",
        color: "var(--bs-gray-600)",
        margin: "0 0 24px"
      }
    }, "Comece pela trilha essencial de LGPD em poucos minutos."), /*#__PURE__*/React.createElement(Input, {
      label: "Nome completo",
      required: true,
      placeholder: "Ana Costa"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "E-mail corporativo",
      type: "email",
      required: true,
      placeholder: "voce@empresa.com.br"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Senha",
      type: "password",
      required: true,
      placeholder: "M\xEDnimo de 8 caracteres",
      help: "Use letras, n\xFAmeros e ao menos um s\xEDmbolo."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "6px 0 18px"
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Li e aceito a Pol\xEDtica de Privacidade e os Termos de Uso",
      checked: agreed,
      onChange: e => setAgreed(e.target.checked)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      disabled: !agreed,
      onClick: () => onSubmit()
    }, "Criar conta"), /*#__PURE__*/React.createElement(GoogleButton, null, "Continuar com Google")), /*#__PURE__*/React.createElement(Foot, {
      prompt: "J\xE1 tem uma conta?",
      action: "Entrar",
      onAction: onLogin
    }));
  }
  function SuccessCard({
    mode,
    onBack
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "auth-card",
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        margin: "0 auto 18px",
        background: "var(--bs-primary-bg-subtle)",
        color: "var(--bs-primary-text-emphasis)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 34
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-shield-check"
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "1.5rem",
        margin: "0 0 6px"
      }
    }, mode === "signup" ? "Conta criada!" : "Tudo certo!"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--bs-gray-600)",
        margin: "0 0 22px"
      }
    }, mode === "signup" ? "Enviamos um e-mail de confirmação. Sua trilha de LGPD já está disponível." : "Você entrou com segurança. Bons estudos!"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      onClick: onBack
    }, "Ir para o painel"));
  }
  window.LoginCard = LoginCard;
  window.SignupCard = SignupCard;
  window.SuccessCard = SuccessCard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auth/AuthScreens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ListGroup = __ds_scope.ListGroup;

__ds_ns.ListGroupItem = __ds_scope.ListGroupItem;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.CHECK_CSS = __ds_scope.CHECK_CSS;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FloatingLabel = __ds_scope.FloatingLabel;

__ds_ns.FORM_CSS = __ds_scope.FORM_CSS;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Modal = __ds_scope.Modal;

})();
