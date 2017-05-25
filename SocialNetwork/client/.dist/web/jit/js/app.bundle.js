webpackJsonp([1],Array(19).concat([
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = toInteger;
/* harmony export (immutable) */ __webpack_exports__["a"] = toString;
/* harmony export (immutable) */ __webpack_exports__["g"] = getValueInRange;
/* harmony export (immutable) */ __webpack_exports__["h"] = isString;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["i"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["c"] = isDefined;
/* harmony export (immutable) */ __webpack_exports__["f"] = padNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = regExpEscape;
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('api/users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post('api/users/user', user)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserObservable = function (userId) {
        return this.http.get('api/users/user/' + userId);
    };
    UserService.prototype.getUser = function (userId) {
        return this.getUserObservable(userId)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getFollowing = function (following) {
        var users = [];
        for (var _i = 0, following_1 = following; _i < following_1.length; _i++) {
            var userId = following_1[_i];
            this.getUser(userId).subscribe(function (user) { return users.push(user); });
        }
        return users;
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/users/user/' + user._id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.changeUserPassword = function (partialUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/users/changePassword', partialUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], UserService);



/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbCalendarGregorian; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_date__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(19);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function fromJSDate(jsDate) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
var NgbCalendar = (function () {
    function NgbCalendar() {
    }
    return NgbCalendar;
}());

NgbCalendar.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCalendar.ctorParameters = function () { return []; };
var NgbCalendarGregorian = (function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    };
    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarGregorian.prototype.getWeekday = function (date) {
        var jsDate = toJSDate(date);
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
    NgbCalendarGregorian.prototype.isValid = function (date) {
        if (!date || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["i" /* isInteger */])(date.year) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["i" /* isInteger */])(date.month) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["i" /* isInteger */])(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    return NgbCalendarGregorian;
}(NgbCalendar));

NgbCalendarGregorian.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCalendarGregorian.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar.js.map

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDate; });
var NgbDate = (function () {
    function NgbDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    NgbDate.from = function (date) {
        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
    };
    NgbDate.prototype.equals = function (other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    };
    NgbDate.prototype.before = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    };
    NgbDate.prototype.after = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    };
    NgbDate.prototype.toString = function () { return this.year + "-" + this.month + "-" + this.day; };
    return NgbDate;
}());

//# sourceMappingURL=ngb-date.js.map

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDatepickerI18nDefault; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var WEEKDAYS_SHORT = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTHS_FULL = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'
];
/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 */
var NgbDatepickerI18n = (function () {
    function NgbDatepickerI18n() {
    }
    return NgbDatepickerI18n;
}());

NgbDatepickerI18n.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDatepickerI18n.ctorParameters = function () { return []; };
var NgbDatepickerI18nDefault = (function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return WEEKDAYS_SHORT[weekday - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return MONTHS_SHORT[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return MONTHS_FULL[month - 1]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

NgbDatepickerI18nDefault.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDatepickerI18nDefault.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker-i18n.js.map

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

var PopupService = (function () {
    function PopupService(type, _injector, _viewContainerRef, _renderer, componentFactoryResolver) {
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._windowFactory = componentFactoryResolver.resolveComponentFactory(type);
    }
    PopupService.prototype.open = function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef =
                this._viewContainerRef.createComponent(this._windowFactory, 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    PopupService.prototype.close = function () {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
        }
    };
    PopupService.prototype._getContentRef = function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText(null, "" + content)]]);
        }
    };
    return PopupService;
}());

//# sourceMappingURL=popup.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get("/api/articles/")
            .map(function (articles) { return articles.json(); });
    };
    ArticleService.prototype.getArticlesForUser = function (userId) {
        return this.http.get("/api/articles/userArticles/" + userId)
            .map(function (articles) { return articles.json(); });
    };
    ArticleService.prototype.addArticle = function (article) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/articles/article', article)
            .map(function (res) { return res.json(); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], ArticleService);



/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgbRootModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_radio_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__ = __webpack_require__(200);
/* unused harmony reexport NgbAccordionModule */
/* unused harmony reexport NgbAccordionConfig */
/* unused harmony reexport NgbAccordion */
/* unused harmony reexport NgbPanel */
/* unused harmony reexport NgbPanelTitle */
/* unused harmony reexport NgbPanelContent */
/* unused harmony reexport NgbAlertModule */
/* unused harmony reexport NgbAlertConfig */
/* unused harmony reexport NgbAlert */
/* unused harmony reexport NgbButtonsModule */
/* unused harmony reexport NgbRadioGroup */
/* unused harmony reexport NgbCarouselModule */
/* unused harmony reexport NgbCarouselConfig */
/* unused harmony reexport NgbCarousel */
/* unused harmony reexport NgbSlide */
/* unused harmony reexport NgbCollapseModule */
/* unused harmony reexport NgbCollapse */
/* unused harmony reexport NgbCalendar */
/* unused harmony reexport NgbCalendarIslamicCivil */
/* unused harmony reexport NgbDatepickerModule */
/* unused harmony reexport NgbDatepickerI18n */
/* unused harmony reexport NgbDatepickerConfig */
/* unused harmony reexport NgbDateParserFormatter */
/* unused harmony reexport NgbDatepicker */
/* unused harmony reexport NgbInputDatepicker */
/* unused harmony reexport NgbDropdownModule */
/* unused harmony reexport NgbDropdownConfig */
/* unused harmony reexport NgbDropdown */
/* unused harmony reexport NgbModalModule */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["c"]; });
/* unused harmony reexport NgbModalRef */
/* unused harmony reexport ModalDismissReasons */
/* unused harmony reexport NgbPaginationModule */
/* unused harmony reexport NgbPaginationConfig */
/* unused harmony reexport NgbPagination */
/* unused harmony reexport NgbPopoverModule */
/* unused harmony reexport NgbPopoverConfig */
/* unused harmony reexport NgbPopover */
/* unused harmony reexport NgbProgressbarModule */
/* unused harmony reexport NgbProgressbarConfig */
/* unused harmony reexport NgbProgressbar */
/* unused harmony reexport NgbRatingModule */
/* unused harmony reexport NgbRatingConfig */
/* unused harmony reexport NgbRating */
/* unused harmony reexport NgbTabsetModule */
/* unused harmony reexport NgbTabsetConfig */
/* unused harmony reexport NgbTabset */
/* unused harmony reexport NgbTab */
/* unused harmony reexport NgbTabContent */
/* unused harmony reexport NgbTabTitle */
/* unused harmony reexport NgbTimepickerModule */
/* unused harmony reexport NgbTimepickerConfig */
/* unused harmony reexport NgbTimepicker */
/* unused harmony reexport NgbTooltipModule */
/* unused harmony reexport NgbTooltipConfig */
/* unused harmony reexport NgbTooltip */
/* unused harmony reexport NgbTypeaheadModule */
/* unused harmony reexport NgbTypeaheadConfig */
/* unused harmony reexport NgbTypeahead */

































var NGB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a" /* NgbAccordionModule */], __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a" /* NgbAlertModule */], __WEBPACK_IMPORTED_MODULE_3__buttons_radio_module__["a" /* NgbButtonsModule */], __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a" /* NgbCollapseModule */], __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["a" /* NgbDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* NgbDropdownModule */], __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* NgbModalModule */], __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* NgbPaginationModule */], __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["a" /* NgbPopoverModule */], __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */], __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["a" /* NgbRatingModule */],
    __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["a" /* NgbTabsetModule */], __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a" /* NgbTimepickerModule */], __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */], __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a" /* NgbTypeaheadModule */]
];
var NgbRootModule = (function () {
    function NgbRootModule() {
    }
    return NgbRootModule;
}());

NgbRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a" /* NgbAlertModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__buttons_radio_module__["a" /* NgbButtonsModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a" /* NgbCollapseModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a" /* NgbTypeaheadModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a" /* NgbAccordionModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a" /* NgbCarouselModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["a" /* NgbDatepickerModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* NgbDropdownModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* NgbModalModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* NgbPaginationModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["a" /* NgbPopoverModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["a" /* NgbRatingModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["a" /* NgbTabsetModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a" /* NgbTimepickerModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */].forRoot()
                ],
                exports: NGB_MODULES
            },] },
];
/** @nocollapse */
NgbRootModule.ctorParameters = function () { return []; };
var NgbModule = (function () {
    function NgbModule() {
    }
    NgbModule.forRoot = function () { return { ngModule: NgbRootModule }; };
    return NgbModule;
}());

NgbModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] },
];
/** @nocollapse */
NgbModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(298));
//# sourceMappingURL=index.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular2_jwt__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var bodyString = JSON.stringify({ username: username, password: password }); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/users/authenticate', bodyString, { headers: headers })
            .map(function (res) {
            var response = res.json();
            if (response && response.token) {
                localStorage.setItem('currentUserId', JSON.stringify(response.user.id));
                localStorage.setItem('user_token', response.token);
            }
            return response;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('user_token');
        this.router.navigate(['/']);
    };
    AuthenticationService.prototype.grantAccess = function (userId) {
        var loggedUserId = JSON.parse(localStorage.getItem('currentUserId'));
        if (!loggedUserId || !userId)
            return false;
        return loggedUserId === userId;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__node_modules_angular2_jwt__["tokenNotExpired"])("user_token");
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
], AuthenticationService);



/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordionConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
var NgbAccordionConfig = (function () {
    function NgbAccordionConfig() {
        this.closeOthers = false;
    }
    return NgbAccordionConfig;
}());

NgbAccordionConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbAccordionConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=accordion-config.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlertConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
var NgbAlertConfig = (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    return NgbAlertConfig;
}());

NgbAlertConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbAlertConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=alert-config.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCarouselConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbCarousel component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the carousels used in the application.
 */
var NgbCarouselConfig = (function () {
    function NgbCarouselConfig() {
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
    }
    return NgbCarouselConfig;
}());

NgbCarouselConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCarouselConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=carousel-config.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    return NgbDatepickerConfig;
}());

NgbDatepickerConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDatepickerConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker-config.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngb_calendar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_date__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_view_model__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_config__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__ = __webpack_require__(59);









var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
var NgbDatepicker = (function () {
    function NgbDatepicker(_service, _calendar, i18n, config) {
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this.months = [];
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.dayTemplate = config.dayTemplate;
        this.displayMonths = config.displayMonths;
        this.firstDayOfWeek = config.firstDayOfWeek;
        this.markDisabled = config.markDisabled;
        this.minDate = config.minDate;
        this.maxDate = config.maxDate;
        this.navigation = config.navigation;
        this.outsideDays = config.outsideDays;
        this.showWeekdays = config.showWeekdays;
        this.showWeekNumbers = config.showWeekNumbers;
        this.startDate = config.startDate;
    }
    NgbDatepicker.prototype.getHeaderHeight = function () {
        var h = this.showWeekdays ? 6.25 : 4.25;
        return this.displayMonths === 1 || this.navigation !== 'select' ? h - 2 : h;
    };
    NgbDatepicker.prototype.getHeaderMargin = function () {
        var m = this.showWeekdays ? 2 : 0;
        return this.displayMonths !== 1 || this.navigation !== 'select' ? m + 2 : m;
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    NgbDatepicker.prototype.navigateTo = function (date) {
        this._setViewWithinLimits(this._service.toValidDate(date));
        this._updateData();
    };
    NgbDatepicker.prototype.ngOnInit = function () {
        this._setDates();
        this.navigateTo(this._date);
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        this._setDates();
        this._setViewWithinLimits(this._date);
        if (changes['displayMonths']) {
            this.displayMonths = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_util__["e" /* toInteger */])(this.displayMonths);
        }
        // we have to force rebuild all months only if any of these inputs changes
        if (['startDate', 'minDate', 'maxDate', 'navigation', 'firstDayOfWeek', 'markDisabled', 'displayMonths'].some(function (input) { return !!changes[input]; })) {
            this._updateData(true);
        }
    };
    NgbDatepicker.prototype.onDateSelect = function (date) {
        this._setViewWithinLimits(date);
        this.onTouched();
        this.writeValue(date);
        this.onChange({ year: date.year, month: date.month, day: date.day });
        // switch current month
        if (this._date.month !== this.months[0].number && this.displayMonths === 1) {
            this._updateData();
        }
    };
    NgbDatepicker.prototype.onNavigateDateSelect = function (date) {
        this._setViewWithinLimits(date);
        this._updateData();
    };
    NgbDatepicker.prototype.onNavigateEvent = function (event) {
        switch (event) {
            case __WEBPACK_IMPORTED_MODULE_5__datepicker_view_model__["a" /* NavigationEvent */].PREV:
                this._setViewWithinLimits(this._calendar.getPrev(this.months[0].firstDate, 'm'));
                break;
            case __WEBPACK_IMPORTED_MODULE_5__datepicker_view_model__["a" /* NavigationEvent */].NEXT:
                this._setViewWithinLimits(this._calendar.getNext(this.months[0].firstDate, 'm'));
                break;
        }
        this._updateData();
    };
    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbDatepicker.prototype.writeValue = function (value) { this.model = this._service.toValidDate(value, null); };
    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbDatepicker.prototype._setDates = function () {
        this._maxDate = __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */].from(this.maxDate);
        this._minDate = __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */].from(this.minDate);
        this._date = this._service.toValidDate(this.startDate);
        if (!this._calendar.isValid(this._minDate)) {
            this._minDate = this._calendar.getPrev(this._date, 'y', 10);
            this.minDate = { year: this._minDate.year, month: this._minDate.month, day: this._minDate.day };
        }
        if (!this._calendar.isValid(this._maxDate)) {
            this._maxDate = this._calendar.getNext(this._date, 'y', 11);
            this._maxDate = this._calendar.getPrev(this._maxDate);
            this.maxDate = { year: this._maxDate.year, month: this._maxDate.month, day: this._maxDate.day };
        }
        if (this._minDate && this._maxDate && this._maxDate.before(this._minDate)) {
            throw new Error("'maxDate' " + this._maxDate + " should be greater than 'minDate' " + this._minDate);
        }
    };
    NgbDatepicker.prototype._setViewWithinLimits = function (date) {
        if (this._minDate && date.before(this._minDate)) {
            this._date = new __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */](this._minDate.year, this._minDate.month, 1);
        }
        else if (this._maxDate && date.after(this._maxDate)) {
            this._date = new __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */](this._maxDate.year, this._maxDate.month, 1);
        }
        else {
            this._date = new __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */](date.year, date.month, 1);
        }
    };
    NgbDatepicker.prototype._updateData = function (force) {
        if (force === void 0) { force = false; }
        var newMonths = [];
        var _loop_1 = function (i) {
            var newDate_1 = this_1._calendar.getNext(this_1._date, 'm', i);
            var index = this_1.months.findIndex(function (month) { return month.firstDate.equals(newDate_1); });
            if (force || index === -1) {
                newMonths.push(this_1._service.generateMonthViewModel(newDate_1, this_1._minDate, this_1._maxDate, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_util__["e" /* toInteger */])(this_1.firstDayOfWeek), this_1.markDisabled));
            }
            else {
                newMonths.push(this_1.months[index]);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.displayMonths; i++) {
            _loop_1(i);
        }
        var newDate = newMonths[0].firstDate;
        var oldDate = this.months[0] ? this.months[0].firstDate : null;
        this.months = newMonths;
        // emitting navigation event if the first month changes
        if (!newDate.equals(oldDate)) {
            this.navigate.emit({
                current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                next: { year: newDate.year, month: newDate.month }
            });
        }
    };
    return NgbDatepicker;
}());

NgbDatepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                exportAs: 'ngbDatepicker',
                selector: 'ngb-datepicker',
                host: { 'class': 'd-inline-block rounded' },
                styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n    }\n    .ngb-dp-header {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n    }\n    .ngb-dp-month {\n      pointer-events: none;\n    }\n    ngb-datepicker-month-view {\n      pointer-events: auto;\n    }\n    .ngb-dp-month:first-child {\n      margin-left: 0 !important;\n    }    \n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n    }    \n  "],
                template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\n       <div ngbDatepickerDayView [date]=\"date\" [currentMonth]=\"currentMonth\" [selected]=\"selected\" [disabled]=\"disabled\"></div>\n    </ng-template>\n    \n    <div class=\"ngb-dp-header bg-faded pt-1 rounded-top\" [style.height.rem]=\"getHeaderHeight()\" \n      [style.marginBottom.rem]=\"-getHeaderMargin()\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"months[0]?.firstDate\"\n        [minDate]=\"_minDate\"\n        [maxDate]=\"_maxDate\"\n        [months]=\"months.length\"\n        [disabled]=\"disabled\"\n        [showWeekNumbers]=\"showWeekNumbers\"\n        [showSelect]=\"navigation === 'select'\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months d-flex px-1 pb-1\">\n      <ng-template ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block ml-3\">            \n          <div *ngIf=\"navigation !== 'select' || displayMonths > 1\" class=\"ngb-dp-month-name text-center\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [selectedDate]=\"model\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [disabled]=\"disabled\"\n            [outsideDays]=\"displayMonths === 1 ? outsideDays : 'hidden'\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n  ",
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_4__datepicker_service__["a" /* NgbDatepickerService */]]
            },] },
];
/** @nocollapse */
NgbDatepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__datepicker_service__["a" /* NgbDatepickerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__ngb_calendar__["a" /* NgbCalendar */], },
    { type: __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_7__datepicker_config__["a" /* NgbDatepickerConfig */], },
]; };
NgbDatepicker.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'displayMonths': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'firstDayOfWeek': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'startDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDateISOParserFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(19);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
var NgbDateParserFormatter = (function () {
    function NgbDateParserFormatter() {
    }
    return NgbDateParserFormatter;
}());

var NgbDateISOParserFormatter = (function (_super) {
    __extends(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateISOParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0])) {
                return { year: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0]) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[1])) {
                return { year: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[0]), month: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0]) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[1]) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[2])) {
                return { year: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[0]), month: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[1]), day: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateISOParserFormatter.prototype.format = function (date) {
        return date ?
            date.year + "-" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(date.month) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["f" /* padNumber */])(date.month) : '') + "-" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(date.day) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["f" /* padNumber */])(date.day) : '') :
            '';
    };
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter));

//# sourceMappingURL=ngb-date-parser-formatter.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdownConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbDropdown directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
var NgbDropdownConfig = (function () {
    function NgbDropdownConfig() {
        this.up = false;
        this.autoClose = true;
    }
    return NgbDropdownConfig;
}());

NgbDropdownConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDropdownConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown-config.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPaginationConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
var NgbPaginationConfig = (function () {
    function NgbPaginationConfig() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
    return NgbPaginationConfig;
}());

NgbPaginationConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbPaginationConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=pagination-config.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPopoverConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = (function () {
    function NgbPopoverConfig() {
        this.placement = 'top';
        this.triggers = 'click';
    }
    return NgbPopoverConfig;
}());

NgbPopoverConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbPopoverConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=popover-config.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbarConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbProgressbar component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
var NgbProgressbarConfig = (function () {
    function NgbProgressbarConfig() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
    return NgbProgressbarConfig;
}());

NgbProgressbarConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbProgressbarConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=progressbar-config.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRatingConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
var NgbRatingConfig = (function () {
    function NgbRatingConfig() {
        this.max = 10;
        this.readonly = false;
    }
    return NgbRatingConfig;
}());

NgbRatingConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbRatingConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=rating-config.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTabsetConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
var NgbTabsetConfig = (function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.type = 'tabs';
    }
    return NgbTabsetConfig;
}());

NgbTabsetConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbTabsetConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset-config.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepickerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbTimepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
var NgbTimepickerConfig = (function () {
    function NgbTimepickerConfig() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
    return NgbTimepickerConfig;
}());

NgbTimepickerConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbTimepickerConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker-config.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltipConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = (function () {
    function NgbTooltipConfig() {
        this.placement = 'top';
        this.triggers = 'hover';
    }
    return NgbTooltipConfig;
}());

NgbTooltipConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbTooltipConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=tooltip-config.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Configuration service for the NgbTypeahead component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
var NgbTypeaheadConfig = (function () {
    function NgbTypeaheadConfig() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
    }
    return NgbTypeaheadConfig;
}());

NgbTypeaheadConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbTypeaheadConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=typeahead-config.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(19);


var NgbTypeaheadWindow = (function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */
        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */
        this.formatter = __WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* toString */];
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activeChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.next = function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.prev = function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
    NgbTypeaheadWindow.prototype.ngOnInit = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    return NgbTypeaheadWindow;
}());

NgbTypeaheadWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-typeahead-window',
                exportAs: 'ngbTypeaheadWindow',
                host: { 'class': 'dropdown-menu', 'style': 'display: block', 'role': 'listbox', '[id]': 'id' },
                template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbTypeaheadWindow.ctorParameters = function () { return []; };
NgbTypeaheadWindow.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'focusFirst': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'results': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'term': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'formatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resultTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'selectEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['select',] },],
    'activeChangeEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['activeChange',] },],
};
//# sourceMappingURL=typeahead-window.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var FlashMessagesService = (function () {
    function FlashMessagesService() {
    }
    return FlashMessagesService;
}());
FlashMessagesService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
FlashMessagesService.ctorParameters = function () { return []; };
exports.FlashMessagesService = FlashMessagesService;
//# sourceMappingURL=flash-messages.service.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_articles_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EDIT_DESCRIPTION = "Successfully edited your profile settings";
var ProfileComponent = (function () {
    function ProfileComponent(userService, authService, articlesService, route, router, flashService) {
        this.userService = userService;
        this.authService = authService;
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.flashService = flashService;
        this.selectedTab = 'Overview';
        this.publications = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (user) {
            _this.currentUser = JSON.parse(user['currentUser']._body);
        });
        var userId = localStorage.getItem('currentUserId');
        if (userId) {
            this.articlesService.getArticlesForUser(JSON.parse(userId)).subscribe(function (articles) {
                _this.publications = articles;
            });
        }
    };
    ProfileComponent.prototype.grantAccess = function () {
        return this.currentUser && this.authService.grantAccess(this.currentUser._id);
    };
    ProfileComponent.prototype.submitDescription = function (editedDescription) {
        var _this = this;
        this.currentUser.description = editedDescription;
        this.userService.updateUser(this.currentUser).subscribe(function (updatedUser) {
            if (updatedUser) {
                _this.flashService
                    .show(EDIT_DESCRIPTION, { cssClass: 'alert-success', timeout: 2000 });
            }
        });
    };
    ProfileComponent.prototype.editProfile = function (editedUser) {
        var _this = this;
        this.userService.updateUser(editedUser).subscribe(function (updatedUser) {
            if (updatedUser) {
                _this.flashService
                    .show(EDIT_DESCRIPTION, { cssClass: 'alert-success', timeout: 2000 });
            }
            else {
                _this.flashService
                    .show("Error", { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    };
    ProfileComponent.prototype.onClickOveview = function () {
        if (this.selectedTab != 'Overview') {
            this.selectedTab = 'Overview';
        }
    };
    ProfileComponent.prototype.onClickAccountSettings = function () {
        if (this.selectedTab != 'AccSettings') {
            this.selectedTab = 'AccSettings';
        }
    };
    ProfileComponent.prototype.onClickPublications = function () {
        if (this.selectedTab != 'Publications') {
            this.selectedTab = 'Publications';
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: 'profile',
        template: __webpack_require__(473)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
        __WEBPACK_IMPORTED_MODULE_4__services_articles_service__["a" /* ArticleService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
        __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
], ProfileComponent);



/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgbPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_config__ = __webpack_require__(105);



var nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
var NgbPanelTitle = (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbPanelTitle;
}());

NgbPanelTitle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbPanelTitle]' },] },
];
/** @nocollapse */
NgbPanelTitle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
/**
 * This directive must be used to wrap accordion panel content.
 */
var NgbPanelContent = (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbPanelContent;
}());

NgbPanelContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbPanelContent]' },] },
];
/** @nocollapse */
NgbPanelContent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
var NgbPanel = (function () {
    function NgbPanel() {
        /**
         *  A flag determining whether the panel is disabled or not.
         *  When disabled, the panel cannot be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel. The id should be unique.
         *  If not provided, it will be auto-generated.
         */
        this.id = "ngb-panel-" + nextId++;
    }
    return NgbPanel;
}());

NgbPanel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ngb-panel' },] },
];
/** @nocollapse */
NgbPanel.ctorParameters = function () { return []; };
NgbPanel.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'contentTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [NgbPanelContent,] },],
    'titleTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [NgbPanelTitle,] },],
};
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
var NgbAccordion = (function () {
    function NgbAccordion(config) {
        /**
         * A map that stores each panel state
         */
        this._states = new Map();
        /**
         * A map that stores references to all panels
         */
        this._panelRefs = new Map();
        /**
         * An array or comma separated strings of panel identifiers that should be opened
         */
        this.activeIds = [];
        /**
         * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
         */
        this.panelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    NgbAccordion.prototype.toggle = function (panelId) {
        var panel = this._panelRefs.get(panelId);
        if (panel && !panel.disabled) {
            var nextState = !this._states.get(panelId);
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panelId, nextState: nextState, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this._states.set(panelId, nextState);
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    };
    NgbAccordion.prototype.ngAfterContentChecked = function () {
        // active id updates
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["h" /* isString */])(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        this._updateStates();
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    /**
     * @internal
     */
    NgbAccordion.prototype.isOpen = function (panelId) { return this._states.get(panelId); };
    NgbAccordion.prototype._closeOthers = function (panelId) {
        var _this = this;
        this._states.forEach(function (state, id) {
            if (id !== panelId) {
                _this._states.set(id, false);
            }
        });
    };
    NgbAccordion.prototype._updateActiveIds = function () {
        var _this = this;
        this.activeIds =
            this.panels.toArray().filter(function (panel) { return _this.isOpen(panel.id) && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    NgbAccordion.prototype._updateStates = function () {
        var _this = this;
        this._states.clear();
        this._panelRefs.clear();
        this.panels.toArray().forEach(function (panel) {
            _this._states.set(panel.id, _this.activeIds.indexOf(panel.id) > -1 && !panel.disabled);
            _this._panelRefs.set(panel.id, panel);
        });
    };
    return NgbAccordion;
}());

NgbAccordion.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-accordion',
                exportAs: 'ngbAccordion',
                host: { 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                template: "\n  <div class=\"card\">\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div role=\"tab\" id=\"{{panel.id}}-header\"\n        [class]=\"'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')\" [class.active]=\"isOpen(panel.id)\">\n        <a href (click)=\"!!toggle(panel.id)\" [class.text-muted]=\"panel.disabled\" [attr.tabindex]=\"(panel.disabled ? '-1' : null)\"\n          [attr.aria-expanded]=\"isOpen(panel.id)\" [attr.aria-controls]=\"(isOpen(panel.id) ? panel.id : null)\"\n          [attr.aria-disabled]=\"panel.disabled\">\n          {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </div>\n      <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\" class=\"card-block\" *ngIf=\"isOpen(panel.id)\">\n        <ng-template [ngTemplateOutlet]=\"panel.contentTpl.templateRef\"></ng-template>\n      </div>\n    </ng-template>\n  </div>\n"
            },] },
];
/** @nocollapse */
NgbAccordion.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__accordion_config__["a" /* NgbAccordionConfig */], },
]; };
NgbAccordion.propDecorators = {
    'panels': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [NgbPanel,] },],
    'activeIds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'closeOtherPanels': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['closeOthers',] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'panelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=accordion.js.map

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__(105);
/* unused harmony reexport NgbAccordion */
/* unused harmony reexport NgbPanel */
/* unused harmony reexport NgbPanelTitle */
/* unused harmony reexport NgbPanelContent */
/* unused harmony reexport NgbAccordionConfig */






var NGB_ACCORDION_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* NgbAccordion */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* NgbPanel */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* NgbPanelTitle */], __WEBPACK_IMPORTED_MODULE_2__accordion__["d" /* NgbPanelContent */]];
var NgbAccordionModule = (function () {
    function NgbAccordionModule() {
    }
    NgbAccordionModule.forRoot = function () { return { ngModule: NgbAccordionModule, providers: [__WEBPACK_IMPORTED_MODULE_3__accordion_config__["a" /* NgbAccordionConfig */]] }; };
    return NgbAccordionModule;
}());

NgbAccordionModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbAccordionModule.ctorParameters = function () { return []; };
//# sourceMappingURL=accordion.module.js.map

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_config__ = __webpack_require__(106);


/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = (function () {
    function NgbAlert(config) {
        /**
         * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
         */
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
    return NgbAlert;
}());

NgbAlert.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-alert',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
            },] },
];
/** @nocollapse */
NgbAlert.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__alert_config__["a" /* NgbAlertConfig */], },
]; };
NgbAlert.propDecorators = {
    'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'close': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=alert.js.map

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_config__ = __webpack_require__(106);
/* unused harmony reexport NgbAlert */
/* unused harmony reexport NgbAlertConfig */






var NgbAlertModule = (function () {
    function NgbAlertModule() {
    }
    NgbAlertModule.forRoot = function () { return { ngModule: NgbAlertModule, providers: [__WEBPACK_IMPORTED_MODULE_3__alert_config__["a" /* NgbAlertConfig */]] }; };
    return NgbAlertModule;
}());

NgbAlertModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]], exports: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]], entryComponents: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]] },] },
];
/** @nocollapse */
NgbAlertModule.ctorParameters = function () { return []; };
//# sourceMappingURL=alert.module.js.map

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbActiveLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);


var NGB_RADIO_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbRadioGroup; }),
    multi: true
};
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
var NgbRadioGroup = (function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (isDisabled) { this.setDisabledState(isDisabled); },
        enumerable: true,
        configurable: true
    });
    NgbRadioGroup.prototype.onRadioChange = function (radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    };
    NgbRadioGroup.prototype.onRadioValueUpdate = function () { this._updateRadiosValue(); };
    NgbRadioGroup.prototype.register = function (radio) { this._radios.add(radio); };
    NgbRadioGroup.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRadioGroup.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    };
    NgbRadioGroup.prototype.unregister = function (radio) { this._radios.delete(radio); };
    NgbRadioGroup.prototype.writeValue = function (value) {
        this._value = value;
        this._updateRadiosValue();
    };
    NgbRadioGroup.prototype._updateRadiosValue = function () {
        var _this = this;
        this._radios.forEach(function (radio) { return radio.updateValue(_this._value); });
    };
    NgbRadioGroup.prototype._updateRadiosDisabled = function () { this._radios.forEach(function (radio) { return radio.updateDisabled(); }); };
    return NgbRadioGroup;
}());

NgbRadioGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngbRadioGroup]',
                host: { 'data-toggle': 'buttons', 'class': 'btn-group', 'role': 'group' },
                providers: [NGB_RADIO_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRadioGroup.ctorParameters = function () { return []; };
var NgbActiveLabel = (function () {
    function NgbActiveLabel(_renderer, _elRef) {
        this._renderer = _renderer;
        this._elRef = _elRef;
    }
    Object.defineProperty(NgbActiveLabel.prototype, "active", {
        set: function (isActive) { this._renderer.setElementClass(this._elRef.nativeElement, 'active', isActive); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbActiveLabel.prototype, "disabled", {
        set: function (isDisabled) {
            this._renderer.setElementClass(this._elRef.nativeElement, 'disabled', isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbActiveLabel.prototype, "focused", {
        set: function (isFocused) { this._renderer.setElementClass(this._elRef.nativeElement, 'focus', isFocused); },
        enumerable: true,
        configurable: true
    });
    return NgbActiveLabel;
}());

NgbActiveLabel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'label.btn' },] },
];
/** @nocollapse */
NgbActiveLabel.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */
var NgbRadio = (function () {
    function NgbRadio(_group, _label, _renderer, _element) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._value = null;
        if (this._group) {
            this._group.register(this);
        }
    }
    Object.defineProperty(NgbRadio.prototype, "value", {
        get: function () { return this._value; },
        /**
         * You can specify model value of a given radio by binding to the value property.
        */
        set: function (value) {
            this._value = value;
            var stringValue = value ? value.toString() : '';
            this._renderer.setElementProperty(this._element.nativeElement, 'value', stringValue);
            if (this._group) {
                this._group.onRadioValueUpdate();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "checked", {
        get: function () { return this._checked; },
        /**
         * A flag indicating if a given radio button is checked.
         */
        set: function (value) {
            this._checked = this._element.nativeElement.hasAttribute('checked') ? true : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "disabled", {
        get: function () { return (this._group && this._group.disabled) || this._disabled; },
        /**
         * A flag indicating if a given radio button is disabled.
         */
        set: function (isDisabled) {
            this._disabled = isDisabled !== false;
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "focused", {
        set: function (isFocused) {
            if (this._label) {
                this._label.focused = isFocused;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbRadio.prototype.ngOnDestroy = function () {
        if (this._group) {
            this._group.unregister(this);
        }
    };
    NgbRadio.prototype.onChange = function () {
        if (this._group) {
            this._group.onRadioChange(this);
        }
    };
    NgbRadio.prototype.updateValue = function (value) {
        this._checked = (this.value === value && value !== null);
        this._label.active = this._checked;
    };
    NgbRadio.prototype.updateDisabled = function () {
        var disabled = (this._group && this._group.disabled) || this._disabled;
        if (this._label) {
            this._label.disabled = disabled;
        }
    };
    return NgbRadio;
}());

NgbRadio.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=radio]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '(change)': 'onChange()',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                }
            },] },
];
/** @nocollapse */
NgbRadio.ctorParameters = function () { return [
    { type: NgbRadioGroup, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    { type: NgbActiveLabel, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
NgbRadio.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
    'checked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['checked',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
//# sourceMappingURL=radio.js.map

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__radio__ = __webpack_require__(161);
/* unused harmony reexport NgbRadio */
/* unused harmony reexport NgbActiveLabel */
/* unused harmony reexport NgbRadioGroup */



var NGB_RADIO_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__radio__["a" /* NgbRadio */], __WEBPACK_IMPORTED_MODULE_1__radio__["b" /* NgbActiveLabel */], __WEBPACK_IMPORTED_MODULE_1__radio__["c" /* NgbRadioGroup */]];
var NgbButtonsModule = (function () {
    function NgbButtonsModule() {
    }
    NgbButtonsModule.forRoot = function () { return { ngModule: NgbButtonsModule, providers: [] }; };
    return NgbButtonsModule;
}());

NgbButtonsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: NGB_RADIO_DIRECTIVES, exports: NGB_RADIO_DIRECTIVES },] },
];
/** @nocollapse */
NgbButtonsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=radio.module.js.map

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgbSlide */
/* unused harmony export NgbCarousel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGB_CAROUSEL_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_config__ = __webpack_require__(107);


var nextId = 0;
/**
 * Represents an individual slide to be used within a carousel.
 */
var NgbSlide = (function () {
    function NgbSlide(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = "ngb-slide-" + nextId++;
    }
    return NgbSlide;
}());

NgbSlide.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbSlide]' },] },
];
/** @nocollapse */
NgbSlide.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
NgbSlide.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Directive to easily create carousels based on Bootstrap's markup.
 */
var NgbCarousel = (function () {
    function NgbCarousel(config) {
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    NgbCarousel.prototype.ngAfterContentChecked = function () {
        var activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    };
    NgbCarousel.prototype.ngOnInit = function () { this._startTimer(); };
    NgbCarousel.prototype.ngOnDestroy = function () { clearInterval(this._slideChangeInterval); };
    /**
     * Navigate to a slide with the specified identifier.
     */
    NgbCarousel.prototype.select = function (slideId) {
        this.cycleToSelected(slideId);
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    NgbCarousel.prototype.prev = function () {
        this.cycleToPrev();
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    NgbCarousel.prototype.next = function () {
        this.cycleToNext();
        this._restartTimer();
    };
    /**
     * Stops the carousel from cycling through items.
     */
    NgbCarousel.prototype.pause = function () { this._stopTimer(); };
    /**
     * Restarts cycling through the carousel slides from left to right.
     */
    NgbCarousel.prototype.cycle = function () { this._startTimer(); };
    NgbCarousel.prototype.cycleToNext = function () { this.cycleToSelected(this._getNextSlide(this.activeId)); };
    NgbCarousel.prototype.cycleToPrev = function () { this.cycleToSelected(this._getPrevSlide(this.activeId)); };
    NgbCarousel.prototype.cycleToSelected = function (slideIdx) {
        var selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide) {
            this.activeId = selectedSlide.id;
        }
    };
    NgbCarousel.prototype.keyPrev = function () {
        if (this.keyboard) {
            this.prev();
        }
    };
    NgbCarousel.prototype.keyNext = function () {
        if (this.keyboard) {
            this.next();
        }
    };
    NgbCarousel.prototype._restartTimer = function () {
        this._stopTimer();
        this._startTimer();
    };
    NgbCarousel.prototype._startTimer = function () {
        var _this = this;
        if (this.interval > 0) {
            this._slideChangeInterval = setInterval(function () { _this.cycleToNext(); }, this.interval);
        }
    };
    NgbCarousel.prototype._stopTimer = function () { clearInterval(this._slideChangeInterval); };
    NgbCarousel.prototype._getSlideById = function (slideId) {
        var slideWithId = this.slides.filter(function (slide) { return slide.id === slideId; });
        return slideWithId.length ? slideWithId[0] : null;
    };
    NgbCarousel.prototype._getSlideIdxById = function (slideId) {
        return this.slides.toArray().indexOf(this._getSlideById(slideId));
    };
    NgbCarousel.prototype._getNextSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    };
    NgbCarousel.prototype._getPrevSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    };
    return NgbCarousel;
}());

NgbCarousel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-carousel',
                exportAs: 'ngbCarousel',
                host: {
                    'class': 'carousel slide',
                    '[style.display]': '"block"',
                    'tabIndex': '0',
                    '(mouseenter)': 'pause()',
                    '(mouseleave)': 'cycle()',
                    '(keydown.arrowLeft)': 'keyPrev()',
                    '(keydown.arrowRight)': 'keyNext()'
                },
                template: "\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\" (click)=\"cycleToSelected(slide.id)\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"left carousel-control-prev\" role=\"button\" (click)=\"cycleToPrev()\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control-next\" role=\"button\" (click)=\"cycleToNext()\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    "
            },] },
];
/** @nocollapse */
NgbCarousel.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__carousel_config__["a" /* NgbCarouselConfig */], },
]; };
NgbCarousel.propDecorators = {
    'slides': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [NgbSlide,] },],
    'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'wrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'keyboard': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'activeId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
//# sourceMappingURL=carousel.js.map

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__(107);
/* unused harmony reexport NgbCarousel */
/* unused harmony reexport NgbSlide */
/* unused harmony reexport NgbCarouselConfig */






var NgbCarouselModule = (function () {
    function NgbCarouselModule() {
    }
    NgbCarouselModule.forRoot = function () { return { ngModule: NgbCarouselModule, providers: [__WEBPACK_IMPORTED_MODULE_3__carousel_config__["a" /* NgbCarouselConfig */]] }; };
    return NgbCarouselModule;
}());

NgbCarouselModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: __WEBPACK_IMPORTED_MODULE_2__carousel__["a" /* NGB_CAROUSEL_DIRECTIVES */], exports: __WEBPACK_IMPORTED_MODULE_2__carousel__["a" /* NGB_CAROUSEL_DIRECTIVES */], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbCarouselModule.ctorParameters = function () { return []; };
//# sourceMappingURL=carousel.module.js.map

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCollapse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
var NgbCollapse = (function () {
    function NgbCollapse() {
        /**
         * A flag indicating collapsed (true) or open (false) state.
         */
        this.collapsed = false;
    }
    return NgbCollapse;
}());

NgbCollapse.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngbCollapse]',
                exportAs: 'ngbCollapse',
                host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
            },] },
];
/** @nocollapse */
NgbCollapse.ctorParameters = function () { return []; };
NgbCollapse.propDecorators = {
    'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngbCollapse',] },],
};
//# sourceMappingURL=collapse.js.map

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCollapseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse__ = __webpack_require__(165);
/* unused harmony reexport NgbCollapse */



var NgbCollapseModule = (function () {
    function NgbCollapseModule() {
    }
    NgbCollapseModule.forRoot = function () { return { ngModule: NgbCollapseModule, providers: [] }; };
    return NgbCollapseModule;
}());

NgbCollapseModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse__["a" /* NgbCollapse */]], exports: [__WEBPACK_IMPORTED_MODULE_1__collapse__["a" /* NgbCollapse */]] },] },
];
/** @nocollapse */
NgbCollapseModule.ctorParameters = function () { return []; };
//# sourceMappingURL=collapse.module.js.map

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerDayView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var NgbDatepickerDayView = (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    return NgbDatepickerDayView;
}());

NgbDatepickerDayView.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[ngbDatepickerDayView]',
                styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;      \n      border-radius: 0.25rem;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                host: {
                    '[class.bg-primary]': 'selected',
                    '[class.text-white]': 'selected',
                    '[class.text-muted]': 'isMuted()',
                    '[class.outside]': 'isMuted()',
                    '[class.btn-secondary]': '!disabled'
                },
                template: "{{ date.day }}"
            },] },
];
/** @nocollapse */
NgbDatepickerDayView.ctorParameters = function () { return []; };
NgbDatepickerDayView.propDecorators = {
    'currentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=datepicker-day-view.js.map

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbInputDatepicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngb_date__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngb_date_parser_formatter__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_positioning__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngb_calendar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_service__ = __webpack_require__(172);








var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbInputDatepicker; }),
    multi: true
};
var NGB_DATEPICKER_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbInputDatepicker; }),
    multi: true
};
/**
 * A directive that makes it possible to have datepickers on input fields.
 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
 */
var NgbInputDatepicker = (function () {
    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service, _calendar) {
        var _this = this;
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._service = _service;
        this._calendar = _calendar;
        this._cRef = null;
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this._validatorChange = function () { };
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._cRef) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_positioning__["a" /* positionElements */])(_this._elRef.nativeElement, _this._cRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    ;
    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elRef.nativeElement, 'disabled', isDisabled);
        if (this.isOpen()) {
            this._cRef.instance.setDisabledState(isDisabled);
        }
    };
    NgbInputDatepicker.prototype.validate = function (c) {
        var value = c.value;
        if (value === null || value === undefined) {
            return null;
        }
        if (!this._calendar.isValid(value)) {
            return { 'ngbDate': { invalid: c.value } };
        }
        if (this.minDate && __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(value).before(__WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(this.minDate))) {
            return { 'ngbDate': { requiredBefore: this.minDate } };
        }
        if (this.maxDate && __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(value).after(__WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(this.maxDate))) {
            return { 'ngbDate': { requiredAfter: this.maxDate } };
        }
    };
    NgbInputDatepicker.prototype.writeValue = function (value) {
        var ngbDate = value ? new __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */](value.year, value.month, value.day) : null;
        this._model = this._calendar.isValid(value) ? ngbDate : null;
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.manualDateChange = function (value) {
        this._model = this._service.toValidDate(this._parserFormatter.parse(value), null);
        this._onChange(this._model ? { year: this._model.year, month: this._model.month, day: this._model.day } : value);
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     */
    NgbInputDatepicker.prototype.open = function () {
        var _this = this;
        if (!this.isOpen()) {
            var cf = this._cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__datepicker__["a" /* NgbDatepicker */]);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._cRef.instance.writeValue(this._model);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            // date selection event handling
            this._cRef.instance.registerOnChange(function (selectedDate) {
                _this.writeValue(selectedDate);
                _this._onChange(selectedDate);
                _this.close();
            });
        }
    };
    /**
     * Closes the datepicker popup.
     */
    NgbInputDatepicker.prototype.close = function () {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
        }
    };
    /**
     * Toggles the datepicker popup (opens when closed and closes when opened).
     */
    NgbInputDatepicker.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    NgbInputDatepicker.prototype.navigateTo = function (date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    };
    NgbInputDatepicker.prototype.onBlur = function () { this._onTouched(); };
    NgbInputDatepicker.prototype.ngOnChanges = function (changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
        }
    };
    NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
        var _this = this;
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
            .forEach(function (optionName) {
            if (_this[optionName] !== undefined) {
                datepickerInstance[optionName] = _this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    };
    NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
        this._renderer.setElementClass(nativeElement, 'dropdown-menu', true);
        this._renderer.setElementStyle(nativeElement, 'padding', '0');
    };
    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
        var _this = this;
        datepickerInstance.navigate.subscribe(function (date) { return _this.navigate.emit(date); });
    };
    NgbInputDatepicker.prototype._writeModelValue = function (model) {
        this._renderer.setElementProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
        if (this.isOpen()) {
            this._cRef.instance.writeValue(model);
            this._onTouched();
        }
    };
    return NgbInputDatepicker;
}());

NgbInputDatepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[ngbDatepicker]',
                exportAs: 'ngbDatepicker',
                host: { '(change)': 'manualDateChange($event.target.value)', '(keyup.esc)': 'close()', '(blur)': 'onBlur()' },
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NGB_DATEPICKER_VALIDATOR, __WEBPACK_IMPORTED_MODULE_7__datepicker_service__["a" /* NgbDatepickerService */]]
            },] },
];
/** @nocollapse */
NgbInputDatepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__ngb_date_parser_formatter__["a" /* NgbDateParserFormatter */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    { type: __WEBPACK_IMPORTED_MODULE_7__datepicker_service__["a" /* NgbDatepickerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_6__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbInputDatepicker.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'displayMonths': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'firstDayOfWeek': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'startDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker-input.js.map

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerMonthView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__ = __webpack_require__(59);



var NgbDatepickerMonthView = (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!this.isDisabled(day) && !this.isHidden(day)) {
            this.select.emit(__WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isDisabled = function (day) { return this.disabled || day.disabled; };
    NgbDatepickerMonthView.prototype.isSelected = function (date) { return this.selectedDate && this.selectedDate.equals(date); };
    NgbDatepickerMonthView.prototype.isCollapsed = function (week) {
        return this.outsideDays === 'collapsed' && week.days[0].date.month !== this.month.number &&
            week.days[week.days.length - 1].date.month !== this.month.number;
    };
    NgbDatepickerMonthView.prototype.isHidden = function (day) {
        return (this.outsideDays === 'hidden' || this.outsideDays === 'collapsed') && this.month.number !== day.date.month;
    };
    return NgbDatepickerMonthView;
}());

NgbDatepickerMonthView.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-datepicker-month-view',
                host: { 'class': 'd-block' },
                styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;      \n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
                template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week d-flex\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small text-center text-info font-italic\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week d-flex\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-center font-italic text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" [class.disabled]=\"isDisabled(day)\"\n         [class.hidden]=\"isHidden(day)\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\"\n            [ngOutletContext]=\"{date: {year: day.date.year, month: day.date.month, day: day.date.day},\n              currentMonth: month.number,\n              disabled: isDisabled(day),\n              selected: isSelected(day.date)}\">\n            </ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbDatepickerMonthView.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
]; };
NgbDatepickerMonthView.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'month': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'selectedDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker-month-view.js.map

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerNavigationSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_i18n__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngb_calendar__ = __webpack_require__(45);





var NgbDatepickerNavigationSelect = (function () {
    function NgbDatepickerNavigationSelect(i18n, calendar) {
        this.i18n = i18n;
        this.calendar = calendar;
        this.years = [];
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.months = calendar.getMonths();
    }
    NgbDatepickerNavigationSelect.prototype.ngOnChanges = function (changes) {
        if (changes['maxDate'] || changes['minDate'] || changes['date']) {
            this._generateYears();
            this._generateMonths();
        }
    };
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](this.date.year, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.prototype._generateMonths = function () {
        var _this = this;
        this.months = this.calendar.getMonths();
        if (this.date && this.date.year === this.minDate.year) {
            var index = this.months.findIndex(function (month) { return month === _this.minDate.month; });
            this.months = this.months.slice(index);
        }
        if (this.date && this.date.year === this.maxDate.year) {
            var index = this.months.findIndex(function (month) { return month === _this.maxDate.month; });
            this.months = this.months.slice(0, index + 1);
        }
    };
    NgbDatepickerNavigationSelect.prototype._generateYears = function () {
        var _this = this;
        this.years = Array.from({ length: this.maxDate.year - this.minDate.year + 1 }, function (e, i) { return _this.minDate.year + i; });
    };
    return NgbDatepickerNavigationSelect;
}());

NgbDatepickerNavigationSelect.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-datepicker-navigation-select',
                styles: ["\n    select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;      \n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n    }\n  "],
                template: "\n    <select [disabled]=\"disabled\" class=\"custom-select d-inline-block\" [value]=\"date?.month\" (change)=\"changeMonth($event.target.value)\">\n      <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select>" +
                    "<select [disabled]=\"disabled\" class=\"custom-select d-inline-block\" [value]=\"date?.year\" (change)=\"changeYear($event.target.value)\">\n      <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select> \n  " // template needs to be formatted in a certain way so we don't add empty text nodes
            },] },
];
/** @nocollapse */
NgbDatepickerNavigationSelect.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbDatepickerNavigationSelect.propDecorators = {
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker-navigation-select.js.map

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerNavigation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_view_model__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_calendar__ = __webpack_require__(45);




var NgbDatepickerNavigation = (function () {
    function NgbDatepickerNavigation(i18n, _calendar) {
        this.i18n = i18n;
        this._calendar = _calendar;
        this.navigation = __WEBPACK_IMPORTED_MODULE_1__datepicker_view_model__["a" /* NavigationEvent */];
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgbDatepickerNavigation.prototype.doNavigate = function (event) { this.navigate.emit(event); };
    NgbDatepickerNavigation.prototype.nextDisabled = function () {
        return this.disabled || (this.maxDate && this._calendar.getNext(this.date, 'm').after(this.maxDate));
    };
    NgbDatepickerNavigation.prototype.prevDisabled = function () {
        var prevDate = this._calendar.getPrev(this.date, 'm');
        return this.disabled || (this.minDate && prevDate.year <= this.minDate.year && prevDate.month < this.minDate.month);
    };
    NgbDatepickerNavigation.prototype.selectDate = function (date) { this.select.emit(date); };
    return NgbDatepickerNavigation;
}());

NgbDatepickerNavigation.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-datepicker-navigation',
                host: { 'class': 'd-flex justify-content-between', '[class.collapsed]': '!showSelect' },
                styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n    }\n    :host.collapsed {\n      margin-bottom: -2rem;        \n    }\n    .ngb-dp-navigation-chevron::before {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.75em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n      width: 0.75em;\n      margin: 0 0 0 0.5rem;\n    }    \n    .ngb-dp-navigation-chevron.right:before {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin: 0 0.5rem 0 0;\n    }\n    .btn-link {\n      cursor: pointer;\n      outline: 0;\n    }\n    .btn-link[disabled] {\n      cursor: not-allowed;\n      opacity: .65;\n    }    \n  "],
                template: "\n    <button type=\"button\" class=\"btn-link\" (click)=\"!!doNavigate(navigation.PREV)\" [disabled]=\"prevDisabled()\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>    \n    </button>\n    \n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block\" [style.width.rem]=\"months * 9\"\n      [date]=\"date\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [disabled] = \"disabled\"\n      (select)=\"selectDate($event)\">\n    </ngb-datepicker-navigation-select>\n    \n    <button type=\"button\" class=\"btn-link\" (click)=\"!!doNavigate(navigation.NEXT)\" [disabled]=\"nextDisabled()\">\n      <span class=\"ngb-dp-navigation-chevron right\"></span>\n    </button>\n  "
            },] },
];
/** @nocollapse */
NgbDatepickerNavigation.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbDatepickerNavigation.propDecorators = {
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'months': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=datepicker-navigation.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);



var NgbDatepickerService = (function () {
    function NgbDatepickerService(_calendar) {
        this._calendar = _calendar;
    }
    NgbDatepickerService.prototype.generateMonthViewModel = function (date, minDate, maxDate, firstDayOfWeek, markDisabled) {
        var month = { firstDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
        date = this._getFirstViewDate(date, firstDayOfWeek);
        // month has weeks
        for (var w = 0; w < this._calendar.getWeeksPerMonth(); w++) {
            var days = [];
            // week has days
            for (var d = 0; d < this._calendar.getDaysPerWeek(); d++) {
                if (w === 0) {
                    month.weekdays.push(this._calendar.getWeekday(date));
                }
                var newDate = new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](date.year, date.month, date.day);
                var disabled = (minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate));
                if (!disabled && markDisabled) {
                    disabled = markDisabled(newDate, { month: month.number, year: month.year });
                }
                // saving first date of the month
                if (month.firstDate === null && date.month === month.number) {
                    month.firstDate = newDate;
                }
                days.push({ date: newDate, disabled: disabled });
                date = this._calendar.getNext(date);
            }
            month.weeks.push({ number: this._calendar.getWeekNumber(days.map(function (day) { return __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(day.date); }), firstDayOfWeek), days: days });
        }
        return month;
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    NgbDatepickerService.prototype._getFirstViewDate = function (date, firstDayOfWeek) {
        var _this = this;
        var currentMonth = date.month;
        var today = new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](date.year, date.month, date.day);
        var yesterday = this._calendar.getPrev(today);
        var firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = function () { return today.month !== yesterday.month && firstDayOfWeek === _this._calendar.getWeekday(today); };
        var reachedTheFirstDayOfTheLastWeekOfPreviousMonth = function () { return today.month !== currentMonth && firstDayOfWeek === _this._calendar.getWeekday(today); };
        // going back in time
        while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
            today = new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](yesterday.year, yesterday.month, yesterday.day);
            yesterday = this._calendar.getPrev(yesterday);
        }
        return today;
    };
    return NgbDatepickerService;
}());

NgbDatepickerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbDatepickerService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__["a" /* NgbCalendar */], },
]; };
//# sourceMappingURL=datepicker-service.js.map

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationEvent; });
var NavigationEvent;
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
//# sourceMappingURL=datepicker-view-model.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_month_view__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_navigation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_input__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_day_view__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__datepicker_navigation_select__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datepicker_config__ = __webpack_require__(108);
/* unused harmony reexport NgbDatepicker */
/* unused harmony reexport NgbInputDatepicker */
/* unused harmony reexport NgbCalendar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hijri_ngb_calendar_islamic_civil__ = __webpack_require__(294);
/* unused harmony reexport NgbCalendarIslamicCivil */
/* unused harmony reexport NgbDatepickerMonthView */
/* unused harmony reexport NgbDatepickerDayView */
/* unused harmony reexport NgbDatepickerNavigation */
/* unused harmony reexport NgbDatepickerNavigationSelect */
/* unused harmony reexport NgbDatepickerConfig */
/* unused harmony reexport NgbDatepickerI18n */
/* unused harmony reexport NgbDateParserFormatter */
























var NgbDatepickerModule = (function () {
    function NgbDatepickerModule() {
    }
    NgbDatepickerModule.forRoot = function () {
        return {
            ngModule: NgbDatepickerModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__["a" /* NgbCalendar */], useClass: __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__["b" /* NgbCalendarGregorian */] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["a" /* NgbDatepickerI18n */], useClass: __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["b" /* NgbDatepickerI18nDefault */] },
                { provide: __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__["a" /* NgbDateParserFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__["b" /* NgbDateISOParserFormatter */] }, __WEBPACK_IMPORTED_MODULE_12__datepicker_config__["a" /* NgbDatepickerConfig */]
            ]
        };
    };
    return NgbDatepickerModule;
}());

NgbDatepickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */], __WEBPACK_IMPORTED_MODULE_3__datepicker_month_view__["a" /* NgbDatepickerMonthView */], __WEBPACK_IMPORTED_MODULE_4__datepicker_navigation__["a" /* NgbDatepickerNavigation */], __WEBPACK_IMPORTED_MODULE_11__datepicker_navigation_select__["a" /* NgbDatepickerNavigationSelect */], __WEBPACK_IMPORTED_MODULE_7__datepicker_day_view__["a" /* NgbDatepickerDayView */],
                    __WEBPACK_IMPORTED_MODULE_5__datepicker_input__["a" /* NgbInputDatepicker */]
                ],
                exports: [__WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */], __WEBPACK_IMPORTED_MODULE_5__datepicker_input__["a" /* NgbInputDatepicker */]],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */]]
            },] },
];
/** @nocollapse */
NgbDatepickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker.module.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdownToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_config__ = __webpack_require__(111);


/**
 * Transforms a node into a dropdown.
 */
var NgbDropdown = (function () {
    function NgbDropdown(config) {
        /**
         *  Defines whether or not the dropdown-menu is open initially.
         */
        this._open = false;
        /**
         *  An event fired when the dropdown is opened or closed.
         *  Event's payload equals whether dropdown is open.
         */
        this.openChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.up = config.up;
        this.autoClose = config.autoClose;
    }
    /**
     * Checks if the dropdown menu is open or not.
     */
    NgbDropdown.prototype.isOpen = function () { return this._open; };
    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.open = function () {
        if (!this._open) {
            this._open = true;
            this.openChange.emit(true);
        }
    };
    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.close = function () {
        if (this._open) {
            this._open = false;
            this.openChange.emit(false);
        }
    };
    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NgbDropdown.prototype.closeFromOutsideClick = function ($event) {
        if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
            this.close();
        }
    };
    NgbDropdown.prototype.closeFromOutsideEsc = function () {
        if (this.autoClose) {
            this.close();
        }
    };
    Object.defineProperty(NgbDropdown.prototype, "toggleElement", {
        /**
         * @internal
         */
        set: function (toggleElement) { this._toggleElement = toggleElement; },
        enumerable: true,
        configurable: true
    });
    NgbDropdown.prototype._isEventFromToggle = function ($event) { return !!this._toggleElement && this._toggleElement.contains($event.target); };
    return NgbDropdown;
}());

NgbDropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngbDropdown]',
                exportAs: 'ngbDropdown',
                host: {
                    '[class.dropdown]': '!up',
                    '[class.dropup]': 'up',
                    '[class.show]': 'isOpen()',
                    '(keyup.esc)': 'closeFromOutsideEsc()',
                    '(document:click)': 'closeFromOutsideClick($event)'
                }
            },] },
];
/** @nocollapse */
NgbDropdown.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__dropdown_config__["a" /* NgbDropdownConfig */], },
]; };
NgbDropdown.propDecorators = {
    'up': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    '_open': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['open',] },],
    'openChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * Allows the dropdown to be toggled via click. This directive is optional.
 */
var NgbDropdownToggle = (function () {
    function NgbDropdownToggle(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
    NgbDropdownToggle.prototype.toggleOpen = function () { this.dropdown.toggle(); };
    return NgbDropdownToggle;
}());

NgbDropdownToggle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngbDropdownToggle]',
                host: {
                    'class': 'dropdown-toggle',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'dropdown.isOpen()',
                    '(click)': 'toggleOpen()'
                }
            },] },
];
/** @nocollapse */
NgbDropdownToggle.ctorParameters = function () { return [
    { type: NgbDropdown, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
//# sourceMappingURL=dropdown.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_config__ = __webpack_require__(111);
/* unused harmony reexport NgbDropdown */
/* unused harmony reexport NgbDropdownToggle */
/* unused harmony reexport NgbDropdownConfig */





var NGB_DROPDOWN_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__dropdown__["a" /* NgbDropdownToggle */], __WEBPACK_IMPORTED_MODULE_1__dropdown__["b" /* NgbDropdown */]];
var NgbDropdownModule = (function () {
    function NgbDropdownModule() {
    }
    NgbDropdownModule.forRoot = function () { return { ngModule: NgbDropdownModule, providers: [__WEBPACK_IMPORTED_MODULE_2__dropdown_config__["a" /* NgbDropdownConfig */]] }; };
    return NgbDropdownModule;
}());

NgbDropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] },
];
/** @nocollapse */
NgbDropdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown.module.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalBackdrop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var NgbModalBackdrop = (function () {
    function NgbModalBackdrop() {
    }
    return NgbModalBackdrop;
}());

NgbModalBackdrop.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{ selector: 'ngb-modal-backdrop', template: '', host: { 'class': 'modal-backdrop fade show' } },] },
];
/** @nocollapse */
NgbModalBackdrop.ctorParameters = function () { return []; };
//# sourceMappingURL=modal-backdrop.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDismissReasons; });
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
//# sourceMappingURL=modal-dismiss-reasons.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbActiveModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbModalRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_popup__ = __webpack_require__(67);


/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
var NgbActiveModal = (function () {
    function NgbActiveModal() {
    }
    /**
     * Can be used to close a modal, passing an optional result.
     */
    NgbActiveModal.prototype.close = function (result) { };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    NgbActiveModal.prototype.dismiss = function (reason) { };
    return NgbActiveModal;
}());

NgbActiveModal.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbActiveModal.ctorParameters = function () { return []; };
/**
 * A reference to a newly opened modal.
 */
var NgbModalRef = (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
        this.result = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this.result.then(null, function () { });
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of component used as modal's content.
         * Undefined when a TemplateRef is used as modal's content.
         */
        get: function () {
            if (this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        // only needed to keep TS1.8 compatibility
        set: function (instance) { },
        enumerable: true,
        configurable: true
    });
    /**
     * Can be used to close a modal, passing an optional result.
     */
    NgbModalRef.prototype.close = function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    NgbModalRef.prototype.dismiss = function (reason) {
        if (this._windowCmptRef) {
            this._reject(reason);
            this._removeModalElements();
        }
    };
    NgbModalRef.prototype._removeModalElements = function () {
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    };
    return NgbModalRef;
}());

NgbModalRef.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbModalRef.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentRef"], },
]; };
//# sourceMappingURL=modal-ref.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalStack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_popup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_backdrop__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_window__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_ref__ = __webpack_require__(179);






var NgbModalStack = (function () {
    function NgbModalStack(_applicationRef, _injector, _componentFactoryResolver) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__modal_backdrop__["a" /* NgbModalBackdrop */]);
        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__modal_window__["a" /* NgbModalWindow */]);
    }
    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
        var containerSelector = options.container || 'body';
        var containerEl = document.querySelector(containerSelector);
        if (!containerEl) {
            throw new Error("The specified modal container \"" + containerSelector + "\" was not found in the DOM.");
        }
        var activeModal = new __WEBPACK_IMPORTED_MODULE_5__modal_ref__["a" /* NgbActiveModal */]();
        var contentRef = this._getContentRef(moduleCFR, contentInjector, content, activeModal);
        var windowCmptRef;
        var backdropCmptRef;
        var ngbModalRef;
        if (options.backdrop !== false) {
            backdropCmptRef = this._backdropFactory.create(this._injector);
            this._applicationRef.attachView(backdropCmptRef.hostView);
            containerEl.appendChild(backdropCmptRef.location.nativeElement);
        }
        windowCmptRef = this._windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        ngbModalRef = new __WEBPACK_IMPORTED_MODULE_5__modal_ref__["b" /* NgbModalRef */](windowCmptRef, contentRef, backdropCmptRef);
        activeModal.close = function (result) { ngbModalRef.close(result); };
        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        return ngbModalRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach(function (optionName) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* isDefined */])(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */]([]);
        }
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            var viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["h" /* isString */])(content)) {
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */]([[document.createTextNode("" + content)]]);
        }
        else {
            var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate([{ provide: __WEBPACK_IMPORTED_MODULE_5__modal_ref__["a" /* NgbActiveModal */], useValue: context }], contentInjector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["b" /* ContentRef */]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    };
    return NgbModalStack;
}());

NgbModalStack.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbModalStack.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
]; };
//# sourceMappingURL=modal-stack.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__ = __webpack_require__(178);


var NgbModalWindow = (function () {
    function NgbModalWindow(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(__WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__["a" /* ModalDismissReasons */].BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(__WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__["a" /* ModalDismissReasons */].ESC);
        }
    };
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () {
        this._elWithFocus = document.activeElement;
        this._renderer.setElementClass(document.body, 'modal-open', true);
    };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._renderer.invokeElementMethod(this._elRef.nativeElement, 'focus', []);
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        if (this._elWithFocus && document.body.contains(this._elWithFocus)) {
            this._renderer.invokeElementMethod(this._elWithFocus, 'focus', []);
        }
        else {
            this._renderer.invokeElementMethod(document.body, 'focus', []);
        }
        this._elWithFocus = null;
        this._renderer.setElementClass(document.body, 'modal-open', false);
    };
    return NgbModalWindow;
}());

NgbModalWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-modal-window',
                host: {
                    '[class]': '"modal fade show" + (windowClass ? " " + windowClass : "")',
                    'role': 'dialog',
                    'tabindex': '-1',
                    'style': 'display: block;',
                    '(keyup.esc)': 'escKey($event)',
                    '(click)': 'backdropClick($event)'
                },
                template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
            },] },
];
/** @nocollapse */
NgbModalWindow.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
NgbModalWindow.propDecorators = {
    'backdrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'keyboard': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'windowClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dismissEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['dismiss',] },],
};
//# sourceMappingURL=modal-window.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_stack__ = __webpack_require__(180);


/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
var NgbModal = (function () {
    function NgbModal(_moduleCFR, _injector, _modalStack) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
    }
    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     */
    NgbModal.prototype.open = function (content, options) {
        if (options === void 0) { options = {}; }
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    };
    return NgbModal;
}());

NgbModal.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbModal.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__modal_stack__["a" /* NgbModalStack */], },
]; };
//# sourceMappingURL=modal.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_window__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_stack__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_ref__ = __webpack_require__(179);
/* unused harmony reexport NgbModalRef */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__modal_ref__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_dismiss_reasons__ = __webpack_require__(178);
/* unused harmony reexport ModalDismissReasons */








var NgbModalModule = (function () {
    function NgbModalModule() {
    }
    NgbModalModule.forRoot = function () { return { ngModule: NgbModalModule, providers: [__WEBPACK_IMPORTED_MODULE_4__modal__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__modal_stack__["a" /* NgbModalStack */]] }; };
    return NgbModalModule;
}());

NgbModalModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop__["a" /* NgbModalBackdrop */], __WEBPACK_IMPORTED_MODULE_2__modal_window__["a" /* NgbModalWindow */]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop__["a" /* NgbModalBackdrop */], __WEBPACK_IMPORTED_MODULE_2__modal_window__["a" /* NgbModalWindow */]],
                providers: [__WEBPACK_IMPORTED_MODULE_4__modal__["a" /* NgbModal */]]
            },] },
];
/** @nocollapse */
NgbModalModule.ctorParameters = function () { return []; };
//# sourceMappingURL=modal.module.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPagination; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__(112);



/**
 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
 */
var NgbPagination = (function () {
    function NgbPagination(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  Current page.
         */
        this.page = 0;
        /**
         *  An event fired when the page is changed.
         *  Event's payload equals to the newly selected page.
         */
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    NgbPagination.prototype.hasPrevious = function () { return this.page > 1; };
    NgbPagination.prototype.hasNext = function () { return this.page < this.pageCount; };
    NgbPagination.prototype.selectPage = function (pageNumber) { this._updatePages(pageNumber); };
    NgbPagination.prototype.ngOnChanges = function (changes) { this._updatePages(this.page); };
    /**
     * @internal
     */
    NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    NgbPagination.prototype._applyEllipses = function (start, end) {
        if (this.ellipses) {
            if (start > 0) {
                if (start > 1) {
                    this.pages.unshift(-1);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                if (end < (this.pageCount - 1)) {
                    this.pages.push(-1);
                }
                this.pages.push(this.pageCount);
            }
        }
    };
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    NgbPagination.prototype._applyRotation = function () {
        var start = 0;
        var end = this.pageCount;
        var leftOffset = Math.floor(this.maxSize / 2);
        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    };
    /**
     * Paginates page numbers based on maxSize items per page
     */
    NgbPagination.prototype._applyPagination = function () {
        var page = Math.ceil(this.page / this.maxSize) - 1;
        var start = page * this.maxSize;
        var end = start + this.maxSize;
        return [start, end];
    };
    NgbPagination.prototype._setPageInRange = function (newPageNo) {
        var prevPageNo = this.page;
        this.page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["g" /* getValueInRange */])(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo) {
            this.pageChange.emit(this.page);
        }
    };
    NgbPagination.prototype._updatePages = function (newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["d" /* isNumber */])(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (var i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            var start = 0;
            var end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                _a = this._applyRotation(), start = _a[0], end = _a[1];
            }
            else {
                _b = this._applyPagination(), start = _b[0], end = _b[1];
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
        var _a, _b;
    };
    return NgbPagination;
}());

NgbPagination.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-pagination',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                host: { 'role': 'navigation' },
                template: "\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"First\" class=\"page-link\" href (click)=\"!!selectPage(1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;&laquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"Previous\" class=\"page-link\" href (click)=\"!!selectPage(page-1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">...</a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"!!selectPage(pageNumber)\">\n          {{pageNumber}}\n          <span *ngIf=\"pageNumber === page\" class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Next\" class=\"page-link\" href (click)=\"!!selectPage(page+1)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Last\" class=\"page-link\" href (click)=\"!!selectPage(pageCount)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  "
            },] },
];
/** @nocollapse */
NgbPagination.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* NgbPaginationConfig */], },
]; };
NgbPagination.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ellipses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'collectionSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'page': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pageSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=pagination.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_config__ = __webpack_require__(112);
/* unused harmony reexport NgbPagination */
/* unused harmony reexport NgbPaginationConfig */






var NgbPaginationModule = (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [__WEBPACK_IMPORTED_MODULE_3__pagination_config__["a" /* NgbPaginationConfig */]] }; };
    return NgbPaginationModule;
}());

NgbPaginationModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__pagination__["a" /* NgbPagination */]], exports: [__WEBPACK_IMPORTED_MODULE_2__pagination__["a" /* NgbPagination */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbPaginationModule.ctorParameters = function () { return []; };
//# sourceMappingURL=pagination.module.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_triggers__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_positioning__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_popup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__(113);





var nextId = 0;
var NgbPopoverWindow = (function () {
    function NgbPopoverWindow() {
        this.placement = 'top';
    }
    return NgbPopoverWindow;
}());

NgbPopoverWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-popover-window',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                host: { '[class]': '"popover show popover-" + placement', 'role': 'tooltip', '[id]': 'id' },
                template: "\n    <h3 class=\"popover-title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
            },] },
];
/** @nocollapse */
NgbPopoverWindow.ctorParameters = function () { return []; };
NgbPopoverWindow.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var NgbPopover = (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Emits an event when the popover is shown
         */
        this.shown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits an event when the popover is hidden
         */
        this.hidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new __WEBPACK_IMPORTED_MODULE_3__util_popup__["a" /* PopupService */](NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     */
    NgbPopover.prototype.open = function (context) {
        if (!this._windowRef) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.placement = this.placement;
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() are not picked up by change detection with the OnPush strategy
            this._windowRef.changeDetectorRef.markForCheck();
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     */
    NgbPopover.prototype.close = function () {
        if (this._windowRef) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-describedby', null);
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
     */
    NgbPopover.prototype.toggle = function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the popover is currently being shown
     */
    NgbPopover.prototype.isOpen = function () { return this._windowRef != null; };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_triggers__["a" /* listenToTriggers */])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    return NgbPopover;
}());

NgbPopover.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
];
/** @nocollapse */
NgbPopover.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* NgbPopoverConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
NgbPopover.propDecorators = {
    'ngbPopover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'shown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=popover.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__(113);
/* unused harmony reexport NgbPopover */
/* unused harmony reexport NgbPopoverConfig */





var NgbPopoverModule = (function () {
    function NgbPopoverModule() {
    }
    NgbPopoverModule.forRoot = function () { return { ngModule: NgbPopoverModule, providers: [__WEBPACK_IMPORTED_MODULE_2__popover_config__["a" /* NgbPopoverConfig */]] }; };
    return NgbPopoverModule;
}());

NgbPopoverModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__popover__["a" /* NgbPopover */], __WEBPACK_IMPORTED_MODULE_1__popover__["b" /* NgbPopoverWindow */]], exports: [__WEBPACK_IMPORTED_MODULE_1__popover__["a" /* NgbPopover */]], entryComponents: [__WEBPACK_IMPORTED_MODULE_1__popover__["b" /* NgbPopoverWindow */]] },] },
];
/** @nocollapse */
NgbPopoverModule.ctorParameters = function () { return []; };
//# sourceMappingURL=popover.module.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_config__ = __webpack_require__(114);



/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = (function () {
    function NgbProgressbar(config) {
        /**
         * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
    }
    NgbProgressbar.prototype.getValue = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["g" /* getValueInRange */])(this.value, this.max); };
    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
    return NgbProgressbar;
}());

NgbProgressbar.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-progressbar',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                template: "\n    <div class=\"progress\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
NgbProgressbar.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__progressbar_config__["a" /* NgbProgressbarConfig */], },
]; };
NgbProgressbar.propDecorators = {
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'animated': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'striped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=progressbar.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_config__ = __webpack_require__(114);
/* unused harmony reexport NgbProgressbar */
/* unused harmony reexport NgbProgressbarConfig */






var NgbProgressbarModule = (function () {
    function NgbProgressbarModule() {
    }
    NgbProgressbarModule.forRoot = function () { return { ngModule: NgbProgressbarModule, providers: [__WEBPACK_IMPORTED_MODULE_3__progressbar_config__["a" /* NgbProgressbarConfig */]] }; };
    return NgbProgressbarModule;
}());

NgbProgressbarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__progressbar__["a" /* NgbProgressbar */]], exports: [__WEBPACK_IMPORTED_MODULE_2__progressbar__["a" /* NgbProgressbar */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbProgressbarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=progressbar.module.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating_config__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);




var Key;
(function (Key) {
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_RATING_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbRating; }),
    multi: true
};
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
var NgbRating = (function () {
    function NgbRating(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
         * An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over.
         */
        this.hover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.max = config.max;
        this.readonly = config.readonly;
    }
    NgbRating.prototype.ariaValueText = function () { return this.nextRate + " out of " + this.max; };
    NgbRating.prototype.enter = function (value) {
        if (!this.readonly && !this.disabled) {
            this._updateState(value);
        }
        this.hover.emit(value);
    };
    NgbRating.prototype.handleKeyDown = function (event) {
        if (Key[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* toString */])(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key.ArrowDown:
                case Key.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key.ArrowUp:
                case Key.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key.Home:
                    this.update(0);
                    break;
                case Key.End:
                    this.update(this.max);
                    break;
            }
        }
    };
    NgbRating.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    NgbRating.prototype.ngOnInit = function () {
        this.contexts = Array.from({ length: this.max }, function () { return ({ fill: 0 }); });
        this._updateState(this.rate);
    };
    NgbRating.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRating.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRating.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    };
    NgbRating.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbRating.prototype.update = function (value, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        var newRate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["g" /* getValueInRange */])(value, this.max, 0);
        if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
        }
        this._updateState(this.rate);
    };
    NgbRating.prototype.writeValue = function (value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    };
    NgbRating.prototype._getFillValue = function (index) {
        var diff = this.nextRate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return Number.parseInt((diff * 100).toFixed(2));
        }
        return 0;
    };
    NgbRating.prototype._updateState = function (nextValue) {
        var _this = this;
        this.nextRate = nextValue;
        this.contexts.forEach(function (context, index) { return context.fill = _this._getFillValue(index); });
    };
    return NgbRating;
}());

NgbRating.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-rating',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'class': 'd-inline-flex',
                    'tabindex': '0',
                    'role': 'slider',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuenow]': 'nextRate',
                    '[attr.aria-valuetext]': 'ariaValueText()',
                    '[attr.aria-disabled]': 'readonly ? true : null',
                    '(mouseleave)': 'reset()',
                    '(keydown)': 'handleKeyDown($event)'
                },
                template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"update(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || t\" [ngOutletContext]=\"contexts[index]\"></ng-template>\n      </span>\n    </ng-template>\n  ",
                providers: [NGB_RATING_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRating.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__rating_config__["a" /* NgbRatingConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
NgbRating.propDecorators = {
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'rate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'starTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
    'hover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'leave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'rateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=rating.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_config__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rating__ = __webpack_require__(190);
/* unused harmony reexport NgbRating */
/* unused harmony reexport NgbRatingConfig */






var NgbRatingModule = (function () {
    function NgbRatingModule() {
    }
    NgbRatingModule.forRoot = function () { return { ngModule: NgbRatingModule, providers: [__WEBPACK_IMPORTED_MODULE_2__rating_config__["a" /* NgbRatingConfig */]] }; };
    return NgbRatingModule;
}());

NgbRatingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_3__rating__["a" /* NgbRating */]], exports: [__WEBPACK_IMPORTED_MODULE_3__rating__["a" /* NgbRating */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbRatingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=rating.module.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgbTabTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTabset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_config__ = __webpack_require__(116);


var nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
var NgbTabTitle = (function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbTabTitle;
}());

NgbTabTitle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbTabTitle]' },] },
];
/** @nocollapse */
NgbTabTitle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
var NgbTabContent = (function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbTabContent;
}());

NgbTabContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ng-template[ngbTabContent]' },] },
];
/** @nocollapse */
NgbTabContent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
/**
 * A directive representing an individual tab.
 */
var NgbTab = (function () {
    function NgbTab() {
        /**
         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
         */
        this.id = "ngb-tab-" + nextId++;
        /**
         * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
         */
        this.disabled = false;
    }
    return NgbTab;
}());

NgbTab.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'ngb-tab' },] },
];
/** @nocollapse */
NgbTab.ctorParameters = function () { return []; };
NgbTab.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'contentTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [NgbTabContent,] },],
    'titleTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [NgbTabTitle,] },],
};
/**
 * A component that makes it easy to create tabbed interface.
 */
var NgbTabset = (function () {
    function NgbTabset(config) {
        /**
         * Whether the closed tabs should be hidden without destroying them
         */
        this.destroyOnHide = true;
        /**
         * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
         */
        this.tabChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.type = config.type;
        this.justify = config.justify;
    }
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     */
    NgbTabset.prototype.select = function (tabId) {
        var selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            var defaultPrevented_1 = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    NgbTabset.prototype.ngAfterContentChecked = function () {
        // auto-correct activeId that might have been set incorrectly as input
        var activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    };
    NgbTabset.prototype._getTabById = function (id) {
        var tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    return NgbTabset;
}());

NgbTabset.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-tabset',
                exportAs: 'ngbTabset',
                template: "\n    <ul [class]=\"'nav nav-' + type + ' justify-content-' + justify\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"!!select(tab.id)\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
            },] },
];
/** @nocollapse */
NgbTabset.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__tabset_config__["a" /* NgbTabsetConfig */], },
]; };
NgbTabset.propDecorators = {
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [NgbTab,] },],
    'activeId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'destroyOnHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'justify': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tabChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=tabset.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTabsetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabset__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabset_config__ = __webpack_require__(116);
/* unused harmony reexport NgbTabset */
/* unused harmony reexport NgbTab */
/* unused harmony reexport NgbTabContent */
/* unused harmony reexport NgbTabTitle */
/* unused harmony reexport NgbTabsetConfig */






var NGB_TABSET_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_2__tabset__["a" /* NgbTabset */], __WEBPACK_IMPORTED_MODULE_2__tabset__["b" /* NgbTab */], __WEBPACK_IMPORTED_MODULE_2__tabset__["c" /* NgbTabContent */], __WEBPACK_IMPORTED_MODULE_2__tabset__["d" /* NgbTabTitle */]];
var NgbTabsetModule = (function () {
    function NgbTabsetModule() {
    }
    NgbTabsetModule.forRoot = function () { return { ngModule: NgbTabsetModule, providers: [__WEBPACK_IMPORTED_MODULE_3__tabset_config__["a" /* NgbTabsetConfig */]] }; };
    return NgbTabsetModule;
}());

NgbTabsetModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbTabsetModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset.module.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_time__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timepicker_config__ = __webpack_require__(117);





var NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbTimepicker; }),
    multi: true
};
/**
 * A lightweight & configurable timepicker directive.
 */
var NgbTimepicker = (function () {
    function NgbTimepicker(config) {
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.meridian = config.meridian;
        this.spinners = config.spinners;
        this.seconds = config.seconds;
        this.hourStep = config.hourStep;
        this.minuteStep = config.minuteStep;
        this.secondStep = config.secondStep;
        this.disabled = config.disabled;
        this.readonlyInputs = config.readonlyInputs;
        this.size = config.size;
    }
    NgbTimepicker.prototype.writeValue = function (value) {
        this.model = value ? new __WEBPACK_IMPORTED_MODULE_3__ngb_time__["a" /* NgbTime */](value.hour, value.minute, value.second) : new __WEBPACK_IMPORTED_MODULE_3__ngb_time__["a" /* NgbTime */]();
        if (!this.seconds && (!value || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(value.second))) {
            this.model.second = 0;
        }
    };
    NgbTimepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbTimepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbTimepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbTimepicker.prototype.changeHour = function (step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeMinute = function (step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeSecond = function (step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateHour = function (newVal) {
        this.model.updateHour(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateMinute = function (newVal) {
        this.model.updateMinute(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateSecond = function (newVal) {
        this.model.updateSecond(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* toInteger */])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.toggleMeridian = function () {
        if (this.meridian) {
            this.changeHour(12);
        }
    };
    NgbTimepicker.prototype.formatHour = function (value) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(value)) {
            if (this.meridian) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value % 24);
            }
        }
        else {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(NaN);
        }
    };
    NgbTimepicker.prototype.formatMinSec = function (value) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value); };
    NgbTimepicker.prototype.setFormControlSize = function () { return { 'form-control-sm': this.size === 'small', 'form-control-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.setButtonSize = function () { return { 'btn-sm': this.size === 'small', 'btn-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.ngOnChanges = function (changes) {
        if (changes['seconds'] && !this.seconds && this.model && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    };
    NgbTimepicker.prototype.propagateModelChange = function (touched) {
        if (touched === void 0) { touched = true; }
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange({ hour: this.model.hour, minute: this.model.minute, second: this.model.second });
        }
        else {
            this.onChange(null);
        }
    };
    return NgbTimepicker;
}());

NgbTimepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-timepicker',
                styles: ["\n    .ngb-tp {\n      display: flex;\n      align-items: center;\n    }\n\n    .ngb-tp-hour, .ngb-tp-minute, .ngb-tp-second, .ngb-tp-meridian {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n    }\n\n    .ngb-tp-spacer {\n      width: 1em;\n      text-align: center;\n    }\n\n    .chevron::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n\n    .chevron.bottom:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n\n    .btn-link {\n      outline: 0;\n    }\n\n    .btn-link.disabled {\n      cursor: not-allowed;\n      opacity: .65;\n    }\n\n    input {\n      text-align: center;\n      display: inline-block;\n      width: auto;\n    }\n  "],
                template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-hour\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(-hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-minute\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(-minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-second\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(-secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [ngClass]=\"setButtonSize()\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n            (click)=\"toggleMeridian()\">{{model.hour >= 12 ? 'PM' : 'AM'}}</button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTimepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__timepicker_config__["a" /* NgbTimepickerConfig */], },
]; };
NgbTimepicker.propDecorators = {
    'meridian': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'spinners': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'seconds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hourStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minuteStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'secondStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'readonlyInputs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=timepicker.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timepicker__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timepicker_config__ = __webpack_require__(117);
/* unused harmony reexport NgbTimepicker */
/* unused harmony reexport NgbTimepickerConfig */






var NgbTimepickerModule = (function () {
    function NgbTimepickerModule() {
    }
    NgbTimepickerModule.forRoot = function () { return { ngModule: NgbTimepickerModule, providers: [__WEBPACK_IMPORTED_MODULE_3__timepicker_config__["a" /* NgbTimepickerConfig */]] }; };
    return NgbTimepickerModule;
}());

NgbTimepickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__timepicker__["a" /* NgbTimepicker */]], exports: [__WEBPACK_IMPORTED_MODULE_2__timepicker__["a" /* NgbTimepicker */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]] },] },
];
/** @nocollapse */
NgbTimepickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker.module.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_triggers__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_positioning__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_popup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_config__ = __webpack_require__(118);





var nextId = 0;
var NgbTooltipWindow = (function () {
    function NgbTooltipWindow() {
        this.placement = 'top';
    }
    return NgbTooltipWindow;
}());

NgbTooltipWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-tooltip-window',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                host: { '[class]': '"tooltip show tooltip-" + placement', 'role': 'tooltip', '[id]': 'id' },
                template: "\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
            },] },
];
/** @nocollapse */
NgbTooltipWindow.ctorParameters = function () { return []; };
NgbTooltipWindow.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
var NgbTooltip = (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Emits an event when the tooltip is shown
         */
        this.shown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Emits an event when the tooltip is hidden
         */
        this.hidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new __WEBPACK_IMPORTED_MODULE_3__util_popup__["a" /* PopupService */](NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function () { return this._ngbTooltip; },
        /**
         * Content to be displayed as tooltip. If falsy, the tooltip won't open.
         */
        set: function (value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     */
    NgbTooltip.prototype.open = function (context) {
        if (!this._windowRef && this._ngbTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.placement = this.placement;
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() - to be determined if this is a bug in the Angular itself
            this._windowRef.changeDetectorRef.markForCheck();
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    NgbTooltip.prototype.close = function () {
        if (this._windowRef != null) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-describedby', null);
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    NgbTooltip.prototype.toggle = function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    NgbTooltip.prototype.isOpen = function () { return this._windowRef != null; };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_triggers__["a" /* listenToTriggers */])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    return NgbTooltip;
}());

NgbTooltip.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
];
/** @nocollapse */
NgbTooltip.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__tooltip_config__["a" /* NgbTooltipConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
NgbTooltip.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'shown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'ngbTooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=tooltip.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_config__ = __webpack_require__(118);
/* unused harmony reexport NgbTooltipConfig */
/* unused harmony reexport NgbTooltip */





var NgbTooltipModule = (function () {
    function NgbTooltipModule() {
    }
    NgbTooltipModule.forRoot = function () { return { ngModule: NgbTooltipModule, providers: [__WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* NgbTooltipConfig */]] }; };
    return NgbTooltipModule;
}());

NgbTooltipModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* NgbTooltip */], __WEBPACK_IMPORTED_MODULE_1__tooltip__["b" /* NgbTooltipWindow */]], exports: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* NgbTooltip */]], entryComponents: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["b" /* NgbTooltipWindow */]] },] },
];
/** @nocollapse */
NgbTooltipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tooltip.module.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbHighlight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(19);


var NgbHighlight = (function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* toString */])(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* toString */])(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_util__["b" /* regExpEscape */])(termLC) + ")")).map(function (part) {
                var originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    };
    return NgbHighlight;
}());

NgbHighlight.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngb-highlight',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                    "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" +
                    "</ng-template>",
                styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
            },] },
];
/** @nocollapse */
NgbHighlight.ctorParameters = function () { return []; };
NgbHighlight.propDecorators = {
    'highlightClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'result': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'term': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=highlight.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeahead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_let__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_positioning__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeahead_window__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_popup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typeahead_config__ = __webpack_require__(119);










var Key;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgbTypeahead; }),
    multi: true
};
var nextWindowId = 0;
/**
 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
 */
var NgbTypeahead = (function () {
    function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._injector = _injector;
        /**
         * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
         */
        this.selectItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.popupId = "ngb-typeahead-" + nextWindowId++;
        this._onTouched = function () { };
        this._onChange = function (_) { };
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this._valueChanges = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__["fromEvent"])(_elementRef.nativeElement, 'input', function ($event) { return $event.target.value; });
        this._popupService = new __WEBPACK_IMPORTED_MODULE_7__util_popup__["a" /* PopupService */](__WEBPACK_IMPORTED_MODULE_6__typeahead_window__["a" /* NgbTypeaheadWindow */], _injector, _viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this.isPopupOpen()) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    NgbTypeahead.prototype.ngOnInit = function () {
        var _this = this;
        var inputValues$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do__["_do"].call(this._valueChanges, function (value) {
            _this._userInput = value;
            if (_this.editable) {
                _this._onChange(value);
            }
        });
        var results$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_let__["letProto"].call(inputValues$, this.ngbTypeahead);
        var userInput$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_do__["_do"].call(results$, function () {
            if (!_this.editable) {
                _this._onChange(undefined);
            }
        });
        this._subscription = this._subscribeToUserInput(userInput$);
    };
    NgbTypeahead.prototype.ngOnDestroy = function () {
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    };
    NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbTypeahead.prototype.writeValue = function (value) { this._writeInputValue(this._formatItemForInput(value)); };
    NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgbTypeahead.prototype.dismissPopup = function () {
        if (this.isPopupOpen()) {
            this._closePopup();
            this._writeInputValue(this._userInput);
        }
    };
    NgbTypeahead.prototype.isPopupOpen = function () { return this._windowRef != null; };
    NgbTypeahead.prototype.handleBlur = function () { this._onTouched(); };
    NgbTypeahead.prototype.handleKeyDown = function (event) {
        if (!this.isPopupOpen()) {
            return;
        }
        if (Key[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_util__["a" /* toString */])(event.which)]) {
            switch (event.which) {
                case Key.ArrowDown:
                    event.preventDefault();
                    this._windowRef.instance.next();
                    this._showHint();
                    break;
                case Key.ArrowUp:
                    event.preventDefault();
                    this._windowRef.instance.prev();
                    this._showHint();
                    break;
                case Key.Enter:
                case Key.Tab:
                    var result = this._windowRef.instance.getActive();
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_util__["c" /* isDefined */])(result)) {
                        event.preventDefault();
                        event.stopPropagation();
                        this._selectResult(result);
                    }
                    this._closePopup();
                    break;
                case Key.Escape:
                    event.preventDefault();
                    this.dismissPopup();
                    break;
            }
        }
    };
    NgbTypeahead.prototype._openPopup = function () {
        var _this = this;
        if (!this.isPopupOpen()) {
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
            this._windowRef.instance.activeChangeEvent.subscribe(function (activeId) { return _this.activeDescendant = activeId; });
        }
    };
    NgbTypeahead.prototype._closePopup = function () {
        this._popupService.close();
        this._windowRef = null;
        this.activeDescendant = undefined;
    };
    NgbTypeahead.prototype._selectResult = function (result) {
        var defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: function () { defaultPrevented = true; } });
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    };
    NgbTypeahead.prototype._selectResultClosePopup = function (result) {
        this._selectResult(result);
        this._closePopup();
    };
    NgbTypeahead.prototype._showHint = function () {
        if (this.showHint) {
            var userInputLowerCase = this._userInput.toLowerCase();
            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._userInput.length).toLowerCase()) {
                this._writeInputValue(this._userInput + formattedVal.substr(this._userInput.length));
                this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'setSelectionRange', [this._userInput.length, formattedVal.length]);
            }
            else {
                this.writeValue(this._windowRef.instance.getActive());
            }
        }
    };
    NgbTypeahead.prototype._formatItemForInput = function (item) {
        return item && this.inputFormatter ? this.inputFormatter(item) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_util__["a" /* toString */])(item);
    };
    NgbTypeahead.prototype._writeInputValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
    };
    NgbTypeahead.prototype._subscribeToUserInput = function (userInput$) {
        var _this = this;
        return userInput$.subscribe(function (results) {
            if (!results || results.length === 0) {
                _this._closePopup();
            }
            else {
                _this._openPopup();
                _this._windowRef.instance.focusFirst = _this.focusFirst;
                _this._windowRef.instance.results = results;
                _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
                if (_this.resultFormatter) {
                    _this._windowRef.instance.formatter = _this.resultFormatter;
                }
                if (_this.resultTemplate) {
                    _this._windowRef.instance.resultTemplate = _this.resultTemplate;
                }
                _this._showHint();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                _this._windowRef.changeDetectorRef.detectChanges();
            }
        });
    };
    NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    };
    return NgbTypeahead;
}());

NgbTypeahead.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[ngbTypeahead]',
                host: {
                    '(blur)': 'handleBlur()',
                    '[class.open]': 'isPopupOpen()',
                    '(document:click)': 'dismissPopup()',
                    '(keydown)': 'handleKeyDown($event)',
                    'autocomplete': 'off',
                    'autocapitalize': 'off',
                    'autocorrect': 'off',
                    'role': 'combobox',
                    'aria-multiline': 'false',
                    '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                    '[attr.aria-activedescendant]': 'activeDescendant',
                    '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                    '[attr.aria-expanded]': 'isPopupOpen()'
                },
                providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTypeahead.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_9__typeahead_config__["a" /* NgbTypeaheadConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
NgbTypeahead.propDecorators = {
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'focusFirst': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'inputFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngbTypeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resultFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resultTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showHint': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'selectItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=typeahead.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__highlight__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_window__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeahead__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeahead_config__ = __webpack_require__(119);
/* unused harmony reexport NgbHighlight */
/* unused harmony reexport NgbTypeaheadWindow */
/* unused harmony reexport NgbTypeaheadConfig */
/* unused harmony reexport NgbTypeahead */










var NgbTypeaheadModule = (function () {
    function NgbTypeaheadModule() {
    }
    NgbTypeaheadModule.forRoot = function () { return { ngModule: NgbTypeaheadModule, providers: [__WEBPACK_IMPORTED_MODULE_5__typeahead_config__["a" /* NgbTypeaheadConfig */]] }; };
    return NgbTypeaheadModule;
}());

NgbTypeaheadModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_4__typeahead__["a" /* NgbTypeahead */], __WEBPACK_IMPORTED_MODULE_2__highlight__["a" /* NgbHighlight */], __WEBPACK_IMPORTED_MODULE_3__typeahead_window__["a" /* NgbTypeaheadWindow */]],
                exports: [__WEBPACK_IMPORTED_MODULE_4__typeahead__["a" /* NgbTypeahead */]],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_3__typeahead_window__["a" /* NgbTypeaheadWindow */]]
            },] },
];
/** @nocollapse */
NgbTypeaheadModule.ctorParameters = function () { return []; };
//# sourceMappingURL=typeahead.module.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Trigger */
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggers;
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());

var DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
var noopFn = function () { };
function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return noopFn;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
        }
        else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
        }
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
//# sourceMappingURL=triggers.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_articles_service__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = (function () {
    function ArticleComponent(articlesService) {
        this.articlesService = articlesService;
        this.articles = [];
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticleComponent.prototype.getArticles = function () {
        var _this = this;
        this.articlesService.getArticles().subscribe(function (articles) {
            _this.articles = articles;
        });
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "article-list",
        template: __webpack_require__(464)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticleService */]])
], ArticleComponent);



/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: 'categories',
        template: __webpack_require__(465)
    })
], CategoryComponent);



/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigationBar_navigationbar_component__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, flashMessagesService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.flashMessagesService = flashMessagesService;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessagesService
                    .show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
            }
            else {
                console.log(data);
                __WEBPACK_IMPORTED_MODULE_4__navigationBar_navigationbar_component__["a" /* NavigationBarComponent */].returned.next(data.user);
                _this.flashMessagesService
                    .show('Verification succeeded', { cssClass: 'alert-success', timeout: 2000 });
            }
            _this.router.navigate(['/']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        template: __webpack_require__(467)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
        __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
        __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
], LoginComponent);



/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationBarComponent = NavigationBarComponent_1 = (function () {
    function NavigationBarComponent(authService, userService, router) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        if (localStorage.getItem('currentUserId')) {
            this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
            this.userService.getUser(this.currentUserId).subscribe(function (user) {
                if (user) {
                    _this.username = user.firstName + " " + user.lastName;
                }
            });
        }
        else {
            this.username = "Guest";
        }
        NavigationBarComponent_1.returned.subscribe(function (res) {
            if (res) {
                _this.username = res.firstName + " " + res.lastName;
                if (localStorage.getItem('currentUserId')) {
                    _this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
                }
            }
        });
    }
    NavigationBarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavigationBarComponent.prototype.goToProfile = function () {
        if (this.currentUserId) {
            this.router.navigate(['/profile', this.currentUserId]);
        }
    };
    return NavigationBarComponent;
}());
NavigationBarComponent.returned = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
NavigationBarComponent = NavigationBarComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "nav-bar",
        template: __webpack_require__(468)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
], NavigationBarComponent);

var NavigationBarComponent_1;


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileResolver = (function () {
    function ProfileResolver(userService) {
        this.userService = userService;
    }
    ProfileResolver.prototype.resolve = function (route) {
        return this.userService.getUserObservable(route.params['id']);
    };
    return ProfileResolver;
}());
ProfileResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
], ProfileResolver);



/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.createUser(this.model)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        template: __webpack_require__(474)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
        __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
], RegisterComponent);



/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getUsers().subscribe(function (users) {
            console.log(users);
            _this.users = users;
        });
    }
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "list-users",
        template: __webpack_require__(475)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
], UsersComponent);

// interface User {
//     _id: string;
//     name: string,
//     username: string,
//     email: string,
//     following: any,
//     messages: any
// } 


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUserId')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
], AuthGuard);



/***/ }),
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_module__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navigationBar_navigationbar_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_users_users_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_articles_article_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_categories_category_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_articles_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_guard_service__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_module__["a" /* ProfileModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_navigationBar_navigationbar_component__["a" /* NavigationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_articles_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_categories_category_component__["a" /* CategoryComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_20__guards_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_18__services_articles_service__["a" /* ArticleService */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["HashLocationStrategy"] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCalendarHijri; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(19);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var NgbCalendarHijri = (function (_super) {
    __extends(NgbCalendarHijri, _super);
    function NgbCalendarHijri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarHijri.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarHijri.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarHijri.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarHijri.prototype.isValid = function (date) {
        return date && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.year) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.month) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.day) &&
            !isNaN(this.toGregorian(date).getTime());
    };
    NgbCalendarHijri.prototype.setDay = function (date, day) {
        day = +day;
        var mDays = this.getDaysInIslamicMonth(date.month, date.year);
        if (day <= 0) {
            while (day <= 0) {
                date = this.setMonth(date, date.month - 1);
                mDays = this.getDaysInIslamicMonth(date.month, date.year);
                day += mDays;
            }
        }
        else if (day > mDays) {
            while (day > mDays) {
                day -= mDays;
                date = this.setMonth(date, date.month + 1);
                mDays = this.getDaysInIslamicMonth(date.month, date.year);
            }
        }
        date.day = day;
        return date;
    };
    NgbCalendarHijri.prototype.setMonth = function (date, month) {
        month = +month;
        date.year = date.year + Math.floor((month - 1) / 12);
        date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
        return date;
    };
    NgbCalendarHijri.prototype.setYear = function (date, yearValue) {
        date.year = +yearValue;
        return date;
    };
    NgbCalendarHijri.prototype._isIslamicLeapYear = function (year) { return (14 + 11 * year) % 30 < 11; };
    /**
     * Returns the start of Hijri Month.
     * `month` is 0 for Muharram, 1 for Safar, etc.
     * `year` is any Hijri year.
     */
    NgbCalendarHijri.prototype._getMonthStart = function (year, month) {
        return Math.ceil(29.5 * month) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
    };
    /**
     * Returns the start of Hijri year.
     * `year` is any Hijri year.
     */
    NgbCalendarHijri.prototype._getYearStart = function (year) { return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0); };
    return NgbCalendarHijri;
}(__WEBPACK_IMPORTED_MODULE_0__ngb_calendar__["a" /* NgbCalendar */]));

NgbCalendarHijri.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCalendarHijri.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar-hijri.js.map

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgbCalendarIslamicCivil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar_hijri__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function isGregorianLeapYear(date) {
    var year = date.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 */
var GREGORIAN_EPOCH = 1721425.5;
var ISLAMIC_EPOCH = 1948439.5;
var NgbCalendarIslamicCivil = (function (_super) {
    __extends(NgbCalendarIslamicCivil, _super);
    function NgbCalendarIslamicCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to Hijri.
     */
    NgbCalendarIslamicCivil.prototype.fromGregorian = function (gdate) {
        var date = new Date(gdate);
        var gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
        var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(date) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        var days = julianDay - ISLAMIC_EPOCH;
        var hYear = Math.floor((30 * days + 10646) / 10631.0);
        var hMonth = Math.ceil((days - 29 - this._getYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        var hDay = Math.ceil(days - this._getMonthStart(hYear, hMonth)) + 1;
        return new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](hYear, hMonth + 1, hDay);
    };
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
     */
    NgbCalendarIslamicCivil.prototype.toGregorian = function (hijriDate) {
        var hYear = hijriDate.year;
        var hMonth = hijriDate.month - 1;
        var hDate = hijriDate.day;
        var julianDay = hDate + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        var wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH, quadricent = Math.floor(depoch / 146097), dqc = mod(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod(dcent, 1461), yindex = Math.floor(dquad / 365);
        var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        var yearday = wjd - gYearStart;
        var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
        var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
        var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        var day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    };
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    NgbCalendarIslamicCivil.prototype.getDaysInIslamicMonth = function (month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        var length = 29 + month % 2;
        if (month === 12 && this._isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    };
    NgbCalendarIslamicCivil.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(date);
        switch (period) {
            case 'y':
                date = this.setYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = this.setMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return this.setDay(date, date.day + number);
            default:
                return date;
        }
    };
    NgbCalendarIslamicCivil.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarIslamicCivil.prototype.getWeekday = function (date) {
        var day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarIslamicCivil.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        var MuhDate = this.toGregorian(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarIslamicCivil.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    return NgbCalendarIslamicCivil;
}(__WEBPACK_IMPORTED_MODULE_0__ngb_calendar_hijri__["a" /* NgbCalendarHijri */]));

NgbCalendarIslamicCivil.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
];
/** @nocollapse */
NgbCalendarIslamicCivil.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar-islamic-civil.js.map

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(19);

var NgbTime = (function () {
    function NgbTime(hour, minute, second) {
        this.hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(hour);
        this.minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(minute);
        this.second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["e" /* toInteger */])(second);
    }
    NgbTime.prototype.changeHour = function (step) {
        if (step === void 0) { step = 1; }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    NgbTime.prototype.updateHour = function (hour) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    NgbTime.prototype.changeMinute = function (step) {
        if (step === void 0) { step = 1; }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    NgbTime.prototype.updateMinute = function (minute) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    NgbTime.prototype.changeSecond = function (step) {
        if (step === void 0) { step = 1; }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    NgbTime.prototype.updateSecond = function (second) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    NgbTime.prototype.isValid = function (checkSecs) {
        if (checkSecs === void 0) { checkSecs = true; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.hour) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.minute) && (checkSecs ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.second) : true);
    };
    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());

//# sourceMappingURL=ngb-time.js.map

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FlashMessage = (function () {
    function FlashMessage(text, cssClass) {
        this.id = (FlashMessage.nextId++);
        this.text = 'default text';
        this.cssClass = '';
        this.text = text;
        this.cssClass = cssClass;
    }
    return FlashMessage;
}());
FlashMessage.nextId = 0;
exports.FlashMessage = FlashMessage;
//# sourceMappingURL=flash-message.js.map

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var flash_message_1 = __webpack_require__(296);
var flash_messages_service_1 = __webpack_require__(121);
var FlashMessagesComponent = (function () {
    function FlashMessagesComponent(_flashMessagesService, _cdRef) {
        this._flashMessagesService = _flashMessagesService;
        this._cdRef = _cdRef;
        this._defaults = {
            text: 'default message',
            cssClass: ''
        };
        this.messages = [];
        this.classes = '';
        this._grayOut = false;
        this._flashMessagesService.show = this.show.bind(this);
        this._flashMessagesService.grayOut = this.grayOut.bind(this);
    }
    FlashMessagesComponent.prototype.ngOnInit = function () { };
    FlashMessagesComponent.prototype.show = function (text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var defaults = {
            timeout: 2500,
            cssClass: ''
        };
        for (var attrname in options) {
            defaults[attrname] = options[attrname];
        }
        var message = new flash_message_1.FlashMessage(text, defaults.cssClass);
        this.messages.push(message);
        this._cdRef.detectChanges();
        window.setTimeout(function () {
            _this._remove(message);
            _this._cdRef.detectChanges();
        }, defaults.timeout);
    };
    FlashMessagesComponent.prototype.grayOut = function (value) {
        if (value === void 0) { value = false; }
        this._grayOut = value;
    };
    FlashMessagesComponent.prototype._remove = function (message) {
        this.messages = this.messages.filter(function (msg) { return msg.id !== message.id; });
    };
    return FlashMessagesComponent;
}());
FlashMessagesComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'flash-messages',
                template: "\n      <div id=\"flashMessages\" class=\"flash-messages {{classes}}\">\n          <div id=\"grayOutDiv\" *ngIf='_grayOut && messages.length'></div>\n          <div class=\"alert flash-message {{message.cssClass}}\" *ngFor='let message of messages'>\n              <p>{{message.text}}</p>\n          </div> \n      </div>\n  "
            },] },
];
/** @nocollapse */
FlashMessagesComponent.ctorParameters = function () { return [
    { type: flash_messages_service_1.FlashMessagesService, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.FlashMessagesComponent = FlashMessagesComponent;
//# sourceMappingURL=flash-messages.component.js.map

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = __webpack_require__(299);
exports.FlashMessagesModule = module_1.FlashMessagesModule;
var flash_messages_service_1 = __webpack_require__(121);
exports.FlashMessagesService = flash_messages_service_1.FlashMessagesService;
//# sourceMappingURL=index.js.map

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(14);
var flash_messages_component_1 = __webpack_require__(297);
var flash_messages_service_1 = __webpack_require__(121);
var FlashMessagesModule = (function () {
    function FlashMessagesModule() {
    }
    return FlashMessagesModule;
}());
FlashMessagesModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [flash_messages_component_1.FlashMessagesComponent],
                exports: [flash_messages_component_1.FlashMessagesComponent],
                providers: [flash_messages_service_1.FlashMessagesService]
            },] },
];
/** @nocollapse */
FlashMessagesModule.ctorParameters = function () { return []; };
exports.FlashMessagesModule = FlashMessagesModule;
//# sourceMappingURL=module.js.map

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = __webpack_require__(57);
var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(0);
__webpack_require__(243);
__webpack_require__(242);
__webpack_require__(245);
var AuthConfigConsts = (function () {
    function AuthConfigConsts() {
    }
    return AuthConfigConsts;
}());
AuthConfigConsts.DEFAULT_TOKEN_NAME = 'token';
AuthConfigConsts.DEFAULT_HEADER_NAME = 'Authorization';
AuthConfigConsts.HEADER_PREFIX_BEARER = 'Bearer ';
exports.AuthConfigConsts = AuthConfigConsts;
var AuthConfigDefaults = {
    headerName: AuthConfigConsts.DEFAULT_HEADER_NAME,
    headerPrefix: null,
    tokenName: AuthConfigConsts.DEFAULT_TOKEN_NAME,
    tokenGetter: function () { return localStorage.getItem(AuthConfigDefaults.tokenName); },
    noJwtError: false,
    noClientCheck: false,
    globalHeaders: [],
    noTokenScheme: false
};
/**
 * Sets up the authentication configuration.
 */
var AuthConfig = (function () {
    function AuthConfig(config) {
        config = config || {};
        this._config = objectAssign({}, AuthConfigDefaults, config);
        if (this._config.headerPrefix) {
            this._config.headerPrefix += ' ';
        }
        else if (this._config.noTokenScheme) {
            this._config.headerPrefix = '';
        }
        else {
            this._config.headerPrefix = AuthConfigConsts.HEADER_PREFIX_BEARER;
        }
        if (config.tokenName && !config.tokenGetter) {
            this._config.tokenGetter = function () { return localStorage.getItem(config.tokenName); };
        }
    }
    AuthConfig.prototype.getConfig = function () {
        return this._config;
    };
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
var AuthHttpError = (function (_super) {
    __extends(AuthHttpError, _super);
    function AuthHttpError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthHttpError;
}(Error));
exports.AuthHttpError = AuthHttpError;
/**
 * Allows for explicit authenticated HTTP requests.
 */
var AuthHttp = (function () {
    function AuthHttp(options, http, defOpts) {
        var _this = this;
        this.http = http;
        this.defOpts = defOpts;
        this.config = options.getConfig();
        this.tokenStream = new Observable_1.Observable(function (obs) {
            obs.next(_this.config.tokenGetter());
        });
    }
    AuthHttp.prototype.mergeOptions = function (providedOpts, defaultOpts) {
        var newOptions = defaultOpts || new http_1.RequestOptions();
        if (this.config.globalHeaders) {
            this.setGlobalHeaders(this.config.globalHeaders, providedOpts);
        }
        newOptions = newOptions.merge(new http_1.RequestOptions(providedOpts));
        return newOptions;
    };
    AuthHttp.prototype.requestHelper = function (requestArgs, additionalOptions) {
        var options = new http_1.RequestOptions(requestArgs);
        if (additionalOptions) {
            options = options.merge(additionalOptions);
        }
        return this.request(new http_1.Request(this.mergeOptions(options, this.defOpts)));
    };
    AuthHttp.prototype.requestWithToken = function (req, token) {
        if (!this.config.noClientCheck && !tokenNotExpired(undefined, token)) {
            if (!this.config.noJwtError) {
                return new Observable_1.Observable(function (obs) {
                    obs.error(new AuthHttpError('No JWT present or has expired'));
                });
            }
        }
        else {
            req.headers.set(this.config.headerName, this.config.headerPrefix + token);
        }
        return this.http.request(req);
    };
    AuthHttp.prototype.setGlobalHeaders = function (headers, request) {
        if (!request.headers) {
            request.headers = new http_1.Headers();
        }
        headers.forEach(function (header) {
            var key = Object.keys(header)[0];
            var headerValue = header[key];
            request.headers.set(key, headerValue);
        });
    };
    AuthHttp.prototype.request = function (url, options) {
        var _this = this;
        if (typeof url === 'string') {
            return this.get(url, options); // Recursion: transform url from String to Request
        }
        // else if ( ! url instanceof Request ) {
        //   throw new Error('First argument must be a url string or Request instance.');
        // }
        // from this point url is always an instance of Request;
        var req = url;
        // Create a cold observable and load the token just in time
        return Observable_1.Observable.defer(function () {
            var token = _this.config.tokenGetter();
            if (token instanceof Promise) {
                return Observable_1.Observable.fromPromise(token).mergeMap(function (jwtToken) { return _this.requestWithToken(req, jwtToken); });
            }
            else {
                return _this.requestWithToken(req, token);
            }
        });
    };
    AuthHttp.prototype.get = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Get, url: url }, options);
    };
    AuthHttp.prototype.post = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Post, url: url }, options);
    };
    AuthHttp.prototype.put = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Put, url: url }, options);
    };
    AuthHttp.prototype.delete = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Delete, url: url }, options);
    };
    AuthHttp.prototype.patch = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Patch, url: url }, options);
    };
    AuthHttp.prototype.head = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Head, url: url }, options);
    };
    AuthHttp.prototype.options = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Options, url: url }, options);
    };
    return AuthHttp;
}());
AuthHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [AuthConfig, http_1.Http, http_1.RequestOptions])
], AuthHttp);
exports.AuthHttp = AuthHttp;
/**
 * Helper class to decode and find JWT expiration.
 */
var JwtHelper = (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // credits for decoder goes to https://github.com/atk
    JwtHelper.prototype.b64decode = function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        buffer = str.charAt(idx++); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    return JwtHelper;
}());
exports.JwtHelper = JwtHelper;
/**
 * Checks for presence of token and that token hasn't expired.
 * For use with the @CanActivate router decorator and NgIf
 */
function tokenNotExpired(tokenName, jwt) {
    if (tokenName === void 0) { tokenName = AuthConfigConsts.DEFAULT_TOKEN_NAME; }
    var token = jwt || localStorage.getItem(tokenName);
    var jwtHelper = new JwtHelper();
    return token != null && !jwtHelper.isTokenExpired(token);
}
exports.tokenNotExpired = tokenNotExpired;
exports.AUTH_PROVIDERS = [
    {
        provide: AuthHttp,
        deps: [http_1.Http, http_1.RequestOptions],
        useFactory: function (http, options) {
            return new AuthHttp(new AuthConfig(), http, options);
        }
    }
];
function provideAuth(config) {
    return [
        {
            provide: AuthHttp,
            deps: [http_1.Http, http_1.RequestOptions],
            useFactory: function (http, options) {
                return new AuthHttp(new AuthConfig(config), http, options);
            }
        }
    ];
}
exports.provideAuth = provideAuth;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
/**
 * Module for angular2-jwt
 * @experimental
 */
var AuthModule = AuthModule_1 = (function () {
    function AuthModule(parentModule) {
        if (parentModule) {
            throw new Error('AuthModule is already loaded. Import it in the AppModule only');
        }
    }
    AuthModule.forRoot = function (config) {
        return {
            ngModule: AuthModule_1,
            providers: [
                { provide: AuthConfig, useValue: config }
            ]
        };
    };
    return AuthModule;
}());
AuthModule = AuthModule_1 = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule],
        providers: [AuthHttp, JwtHelper]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [AuthModule])
], AuthModule);
exports.AuthModule = AuthModule;
var AuthModule_1;
//# sourceMappingURL=angular2-jwt.js.map

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "my-app",
        template: __webpack_require__(463)
    })
], AppComponent);



/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_users_users_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_articles_article_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_categories_category_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_guard_service__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_articles_article_component__["a" /* ArticleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_guard_service__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'articles', component: __WEBPACK_IMPORTED_MODULE_3__components_articles_article_component__["a" /* ArticleComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_7__components_categories_category_component__["a" /* CategoryComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);



/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "home",
        template: __webpack_require__(466)
    })
], HomeComponent);



/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddArticleModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddArticleModal = (function () {
    function AddArticleModal(formBuilder, articleService, ngbActiveModal) {
        this.formBuilder = formBuilder;
        this.articleService = articleService;
        this.ngbActiveModal = ngbActiveModal;
        this.categories = ['nature', 'business'];
        this.createAddArticleForm();
    }
    AddArticleModal.prototype.createAddArticleForm = function () {
        this.addArticleForm = this.formBuilder.group({
            title: '',
            category: '',
            content: ''
        });
    };
    AddArticleModal.prototype.submitArticle = function () {
        var _this = this;
        var article = {
            title: this.addArticleForm.get("title").value,
            category: this.addArticleForm.get("category").value,
            content: this.addArticleForm.get("content").value,
            publisher: JSON.parse(localStorage.getItem("currentUserId"))
        };
        this.articleService.addArticle(article).subscribe(function (data) {
            if (data) {
                _this.ngbActiveModal.close();
            }
        });
    };
    return AddArticleModal;
}());
AddArticleModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "add-article-modal",
        template: __webpack_require__(469)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticleService */],
        __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]])
], AddArticleModal);



/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileOverviewComponent = (function () {
    function ProfileOverviewComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.editAllowed = false;
        this.articles = [];
        this.descriptionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    //TODO When edit description should see the current Description and 
    //change it, not writing new one
    // ngOnInit() {
    //     Object.assign(this.editedDescription, this.userDescription);
    // }
    ProfileOverviewComponent.prototype.editDescription = function () {
        this.editAllowed = !this.editAllowed;
    };
    ProfileOverviewComponent.prototype.submitDescription = function () {
        this.descriptionEmitter.emit(this.editedDescription);
        this.editDescription();
    };
    return ProfileOverviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('access'),
    __metadata("design:type", Boolean)
], ProfileOverviewComponent.prototype, "userAccess", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('description'),
    __metadata("design:type", String)
], ProfileOverviewComponent.prototype, "userDescription", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProfileOverviewComponent.prototype, "descriptionEmitter", void 0);
ProfileOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "profile-overview",
        template: __webpack_require__(470)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
        __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
], ProfileOverviewComponent);



/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePublicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_article_modal_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePublicationsComponent = (function () {
    function ProfilePublicationsComponent(route, router, articleService, modalService) {
        this.route = route;
        this.router = router;
        this.articleService = articleService;
        this.modalService = modalService;
    }
    ProfilePublicationsComponent.prototype.openArticleModal = function () {
        this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__add_article_modal_component__["a" /* AddArticleModal */]);
    };
    return ProfilePublicationsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProfilePublicationsComponent.prototype, "publications", void 0);
ProfilePublicationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "profile-publications",
        template: __webpack_require__(471)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
        __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticleService */],
        __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
], ProfilePublicationsComponent);



/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_resolver_service__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var profileRoutes = [
    {
        path: 'profile/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__profile_resolver_service__["a" /* ProfileResolver */]
        }
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(profileRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ProfileRoutingModule);



/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PASSWORD_MISMATCH = "New password mismatch with the confirm password!";
var ProfileSettingsComponent = (function () {
    function ProfileSettingsComponent(userService, flashService, formBuilder) {
        this.userService = userService;
        this.flashService = flashService;
        this.formBuilder = formBuilder;
        this.profileEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createSettingsForm();
        this.createPasswordForm();
    }
    ProfileSettingsComponent.prototype.ngOnChanges = function () {
        this.settingsForm.patchValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            address: this.user.address,
            phone: this.user.phone,
            company: this.user.company,
            position: this.user.position
        });
    };
    ProfileSettingsComponent.prototype.editProfileSettings = function () {
        this.user.firstName = this.settingsForm.get('firstName').value;
        this.user.lastName = this.settingsForm.get('lastName').value;
        this.user.address = this.settingsForm.get('address').value;
        this.user.phone = this.settingsForm.get('phone').value;
        this.user.company = this.settingsForm.get('company').value;
        this.user.position = this.settingsForm.get('position').value;
        this.profileEmitter.emit(this.user);
    };
    ProfileSettingsComponent.prototype.createSettingsForm = function () {
        this.settingsForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            company: '',
            position: ''
        });
    };
    ProfileSettingsComponent.prototype.createPasswordForm = function () {
        this.passwordForm = this.formBuilder.group({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };
    ProfileSettingsComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.passwordForm.get('newPassword').value !==
            this.passwordForm.get('confirmPassword').value) {
            this.flashService.show(PASSWORD_MISMATCH, { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            var partialUser = {
                id: this.user._id,
                oldPassword: this.passwordForm.get('oldPassword').value,
                newPassword: this.passwordForm.get('newPassword').value
            };
            this.userService.changeUserPassword(partialUser).subscribe(function (data) {
                if (data.success) {
                    _this.flashService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    return ProfileSettingsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProfileSettingsComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProfileSettingsComponent.prototype, "profileEmitter", void 0);
ProfileSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        moduleId: module.i,
        selector: "profile-settings",
        template: __webpack_require__(472)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]])
], ProfileSettingsComponent);



/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_overview_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_settings_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_publications_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_resolver_service__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profile_overview_component__["a" /* ProfileOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__profile_settings_component__["a" /* ProfileSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__profile_publications_component__["a" /* ProfilePublicationsComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__profile_resolver_service__["a" /* ProfileResolver */]]
    })
], ProfileModule);



/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(285);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);


/***/ }),
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 20px\">\n    <home></home>\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n    <!-- router-outlet is kind of placeholder which load routes and other components-->\n</div>";

/***/ }),
/* 464 */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto;\n    width: 60%;\n    border: 3px solid #73AD21;\n    padding: 10px;\">\n    <div *ngFor=\"let article of articles\">\n        <div>{{article.title}}</div>\n        <div>{{article.publisher}}</div>\n        <div>{{article.published_at}}</div>\n        <div>{{article.votes}}</div>\n        <div>{{article.content}}</div>\n    </div>\n</div>";

/***/ }),
/* 465 */
/***/ (function(module, exports) {

module.exports = "<div>Categories</div>\n<ul></ul>";

/***/ }),
/* 466 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n</div>";

/***/ }),
/* 467 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    \n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f='ngForm' novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !username.valid\">Username is required</div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !password.valid\">Password is required</div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n            </div>\n    </form>\n</div>";

/***/ }),
/* 468 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <!--<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>-->\n      <a class=\"navbar-brand\" href=\"/\">SocNet</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/articles\" routerLinkActive=\"active\">Articles</a></li>\n        <li><a routerLink=\"/users\" routerLinkActive=\"active\">Authors</a></li>\n        <li><a routerLink=\"/categories\" routerLinkActive=\"active\">Categories</a></li>            \n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\"><a>{{username}}</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"goToProfile()\">{{username}}</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a routerLink=\"/messages\" routerLinkActive=\"active\">Messages(0)</a></li>\n        <li *ngIf=\"!authService.loggedIn()\"><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>        \n        <li *ngIf=\"authService.loggedIn()\"><a href (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>";

/***/ }),
/* 469 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Hi there!</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"addArticleForm\" (ngSubmit)=\"submitArticle()\">\n        <div class=\"form-group\">\n            <label>Title:</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"title\">\n        </div>\n        <div class=\"form-group\">\n            <label>Category:</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"category\">\n        </div>\n        <div class=\"form-group\">\n            <label>Content:</label>\n            <textarea rows=\"10\" cols=\"100\" class=\"form-control\" formControlName=\"content\">\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>";

/***/ }),
/* 470 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>User Description</h3>\n    <div>\n        {{userDescription}}\n    </div>\n    <div *ngIf=\"userAccess && !editAllowed\">\n        <button (click)=\"editDescription()\"> Edit Description </button>\n    </div>\n    <div *ngIf=\"editAllowed\">\n        <form (ngSubmit)=\"submitDescription()\">\n            <label>Write something about you</label>\n            <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"editedDescription\" name=\"userBiography\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Edit</button>\n        </form>\n    </div>\n    <hr>\n    <h3>Top posts</h3>\n    <div *ngIf=\"articles.length !== 0\">\n        <div *ngFor=\"let post of articles\">\n            <h4>{{post.title}}</h4>\n            <div>{{post.content}}</div>\n            <span>There are {{post.vote}} points for this post</span>\n        </div>\n    </div>\n    <div *ngIf=\"articles.length === 0\">There are no posts yet!</div>\n</div> \n<!--<div>GJ</div>-->";

/***/ }),
/* 471 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>My Publications</h3>    \n    <div *ngIf=\"publications.length > 0\">\n        <div *ngFor=\"let article of publications\">\n            <ul>\n                <li>{{article.title}}</li>\n            </ul>\n        </div>\n    </div>\n    <div *ngIf=\"publications.length === 0\">You don't have any publications</div>\n\n    <button class=\"btn btn-success\" (click)=\"openArticleModal()\">Add Article</button>\n</div>";

/***/ }),
/* 472 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Account Settings</h3>\n    <form [formGroup]=\"settingsForm\" (ngSubmit)=\"editProfileSettings()\">\n        <div class=\"form-group\">\n            <label >First Name</label>\n            <input type=\"text\" formControlName=\"firstName\">\n        </div>\n        <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"text\" formControlName=\"lastName\">\n        </div>\n        <div class=\"form-group\">\n            <label >Address</label>\n            <input type=\"text\" formControlName=\"address\">\n        </div>\n        <div class=\"form-group\">\n            <label >Phone Number</label>\n            <input type=\"text\" formControlName=\"phone\">\n        </div>\n        <div class=\"form-group\">\n            <label>Company: </label>\n            <input type=\"text\" formControlName=\"company\">\n        </div>\n        <div class=\"form-group\">\n            <label>Position: </label>\n            <input type=\"text\" formControlName=\"position\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Edit</button>\n    </form>\n    <hr>\n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"changePassword()\">\n        <h3>Change password</h3> \n        <div class=\"form-group\">\n            <label>Old Password: </label>\n            <input type=\"password\" formControlName=\"oldPassword\">\n        </div>\n        <div class=\"form-group\">\n            <label>New Password: </label>\n            <input type=\"password\" formControlName=\"newPassword\">\n        </div>\n        <div class=\"form-group\">\n            <label >Confirm Password: </label>\n            <input type=\"password\" formControlName=\"confirmPassword\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Change Password</button>\n    </form>\n</div>";

/***/ }),
/* 473 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row profile\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"profile-sidebar\">\n\t\t\t\t<div class=\"profile-userpic\">\n\t\t\t\t\t<img src=\"https://www.prestashop.com/forums/public/style_images/tctc91_haze/profile/default_large.png\" class=\"img-responsive\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"profile-usertitle\">\n\t\t\t\t\t<div class=\"profile-usertitle-name\">\n                        <span><strong>{{currentUser?.firstName}} </strong></span>\n                        <span><strong>{{currentUser?.lastName}}</strong></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"profile-usertitle-job\">\n                        {{currentUser?.position ? currentUser?.position: \"Position: None\"}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"profile-userbuttons\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\"\n\t\t\t\t\t\t*ngIf=\"!grantAccess()\">Follow</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-sm\"\n\t\t\t\t\t\t*ngIf=\"!grantAccess()\">Message</button>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"onClickOveview()\">Overview</button>\n\t\t\t\t<button *ngIf=\"grantAccess()\" class=\"btn btn-primary\"\n\t\t\t\t\t(click)=\"onClickAccountSettings()\">User Information</button>\n\t\t\t\t<button *ngIf=\"grantAccess()\" class=\"btn btn-primary\"\n\t\t\t\t\t(click)=\"onClickPublications()\">My Publications</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n            <div class=\"profile-content\">\n                <profile-overview *ngIf=\"selectedTab === 'Overview'\" \n\t\t\t\t\t[access]=\"grantAccess()\"\n\t\t\t\t\t[description]=\"currentUser.description\"\n\t\t\t\t\t(descriptionEmitter)=\"submitDescription($event)\">\n\t\t\t\t</profile-overview>\n\n\t\t\t\t<profile-settings *ngIf=\"selectedTab === 'AccSettings'\" \n\t\t\t\t\t[user]=\"currentUser\"\n\t\t\t\t\t(profileEmitter)=\"editProfile($event)\">\n\t\t\t\t</profile-settings>\n\n\t\t\t\t<profile-publications *ngIf=\"selectedTab === 'Publications'\"\n\t\t\t\t\t[publications]=\"publications\">\n\t\t\t\t</profile-publications>\n            </div>\n\t\t</div>\n\t</div>\n</div>";

/***/ }),
/* 474 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>";

/***/ }),
/* 475 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Authors</h3>\n    <div *ngFor=\"let user of users\">\n        <a [routerLink]=\"['/profile', user._id]\"><span>{{user.username}}</span></a>\n    </div>\n</div>";

/***/ })
]),[310]);