import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
function getWindow() {
    return window;
}
let NgxPlaidLinkButtonComponent = class NgxPlaidLinkButtonComponent {
    constructor() {
        this.Event = new EventEmitter();
        this.Success = new EventEmitter();
        this.Click = new EventEmitter();
        this.Load = new EventEmitter();
        this.Exit = new EventEmitter();
        this.defaultProps = {
            apiVersion: "v2",
            env: "sandbox",
            institution: null,
            selectAccount: false,
            token: null,
            webhook: "",
            product: ["auth"],
            countryCodes: ["US"],
            style: {
                "background-color": "#0085e4",
                "transition-duration": "350ms",
                "transition-property": "background-color, box-shadow",
                "transition-timing-function": "ease-in-out",
                "-webkit-appearance": "button",
                border: "0",
                "border-radius": "4px",
                "box-shadow": "0 2px 4px 0 rgba(0,0,0,0.1), inset 0 1px 0 0 rgba(255,255,255,0.1)",
                color: "#fff",
                "font-size": "20px",
                height: "56px",
                outline: "0",
                "text-align": "center",
                "text-transform": "none",
                padding: "0 2em",
                cursor: "pointer"
            },
            buttonText: "Log In To Your Bank Account",
            className: "plaid-link-button",
        };
        this.apiVersion = this.defaultProps.apiVersion;
        this.env = this.defaultProps.env;
        this.institution = this.defaultProps.institution;
        this.product = this.defaultProps.product;
        this.selectAccount = this.defaultProps.selectAccount;
        this.token = this.defaultProps.token;
        this.webhook = this.defaultProps.webhook;
        this.countryCodes = this.defaultProps.countryCodes;
        this.style = this.defaultProps.style;
        this.buttonText = this.defaultProps.buttonText;
        this.className = this.defaultProps.className;
    }
    get nativeWindow() {
        return getWindow();
    }
    onScriptError() {
        console.error("There was an issue loading the link-initialize.js script");
    }
    onDirectiveSuccess(event) {
        this.Success.emit(event);
    }
    onDirectiveExit(event) {
        this.Exit.emit(event);
    }
    onDirectiveLoad(event) {
        this.Load.emit(event);
    }
    onDirectiveEvent(event) {
        this.Event.emit(event);
    }
    onDirectiveClick(event) {
        this.Click.emit(event);
    }
};
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "clientName", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "publicKey", void 0);
__decorate([
    Output()
], NgxPlaidLinkButtonComponent.prototype, "Event", void 0);
__decorate([
    Output()
], NgxPlaidLinkButtonComponent.prototype, "Success", void 0);
__decorate([
    Output()
], NgxPlaidLinkButtonComponent.prototype, "Click", void 0);
__decorate([
    Output()
], NgxPlaidLinkButtonComponent.prototype, "Load", void 0);
__decorate([
    Output()
], NgxPlaidLinkButtonComponent.prototype, "Exit", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "apiVersion", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "env", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "institution", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "product", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "selectAccount", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "token", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "webhook", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "countryCodes", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "style", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "buttonText", void 0);
__decorate([
    Input()
], NgxPlaidLinkButtonComponent.prototype, "className", void 0);
NgxPlaidLinkButtonComponent = __decorate([
    Component({
        selector: "mr-ngx-plaid-link-button",
        template: `
    <button ngxPlaidLink
            [class]="className"
            [ngStyle]="style"
            [publicKey]="publicKey"
            [clientName]="clientName"
            [apiVersion]="apiVersion"
            [env]="env"
            [institution]="institution"
            [product]="product"
            [selectAccount]="selectAccount"
            [token]="token"
            [webhook]="webhook"
            [countryCodes]="countryCodes"
            (Success)="onDirectiveSuccess($event)"
            (Exit)="onDirectiveExit($event)"
            (Load)="onDirectiveLoad($event)"
            (Event)="onDirectiveEvent($event)"
            (Click)="onDirectiveClick($event)"
    >
      {{ buttonText }}
    </button>
  `
    })
], NgxPlaidLinkButtonComponent);
export { NgxPlaidLinkButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmstYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wbGFpZC1saW5rLyIsInNvdXJjZXMiOlsibGliL25neC1wbGFpZC1saW5rLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJdkUsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUE2QkQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFvRHRDO1FBaERVLFVBQUssR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxZQUFPLEdBQXFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0QsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QsaUJBQVksR0FBRztZQUNyQixVQUFVLEVBQUUsSUFBSTtZQUNoQixHQUFHLEVBQUUsU0FBUztZQUNkLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixxQkFBcUIsRUFBRSxPQUFPO2dCQUM5QixxQkFBcUIsRUFBRSw4QkFBOEI7Z0JBQ3JELDRCQUE0QixFQUFFLGFBQWE7Z0JBQzNDLG9CQUFvQixFQUFFLFFBQVE7Z0JBQzlCLE1BQU0sRUFBRSxHQUFHO2dCQUNYLGVBQWUsRUFBRSxLQUFLO2dC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QUFDbkQ7SUFBUixLQUFLLEVBQUU7OERBQWtEO0FBbEQvQywyQkFBMkI7SUEzQnZDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO0tBRUYsQ0FBQztHQUNXLDJCQUEyQixDQWlGdkM7U0FqRlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGxhaWRPbkV2ZW50QXJncywgUGxhaWRPbkV4aXRBcmdzLCBQbGFpZE9uU3VjY2Vzc0FyZ3MgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSUN1c3RvbVdpbmRvdyB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmsuZGlyZWN0aXZlJztcblxuZnVuY3Rpb24gZ2V0V2luZG93KCk6IGFueSB7XG4gIHJldHVybiB3aW5kb3c7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtci1uZ3gtcGxhaWQtbGluay1idXR0b25cIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIG5neFBsYWlkTGlua1xuICAgICAgICAgICAgW2NsYXNzXT1cImNsYXNzTmFtZVwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICBbcHVibGljS2V5XT1cInB1YmxpY0tleVwiXG4gICAgICAgICAgICBbY2xpZW50TmFtZV09XCJjbGllbnROYW1lXCJcbiAgICAgICAgICAgIFthcGlWZXJzaW9uXT1cImFwaVZlcnNpb25cIlxuICAgICAgICAgICAgW2Vudl09XCJlbnZcIlxuICAgICAgICAgICAgW2luc3RpdHV0aW9uXT1cImluc3RpdHV0aW9uXCJcbiAgICAgICAgICAgIFtwcm9kdWN0XT1cInByb2R1Y3RcIlxuICAgICAgICAgICAgW3NlbGVjdEFjY291bnRdPVwic2VsZWN0QWNjb3VudFwiXG4gICAgICAgICAgICBbdG9rZW5dPVwidG9rZW5cIlxuICAgICAgICAgICAgW3dlYmhvb2tdPVwid2ViaG9va1wiXG4gICAgICAgICAgICBbY291bnRyeUNvZGVzXT1cImNvdW50cnlDb2Rlc1wiXG4gICAgICAgICAgICAoU3VjY2Vzcyk9XCJvbkRpcmVjdGl2ZVN1Y2Nlc3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAoRXhpdCk9XCJvbkRpcmVjdGl2ZUV4aXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoTG9hZCk9XCJvbkRpcmVjdGl2ZUxvYWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoRXZlbnQpPVwib25EaXJlY3RpdmVFdmVudCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChDbGljayk9XCJvbkRpcmVjdGl2ZUNsaWNrKCRldmVudClcIlxuICAgID5cbiAgICAgIHt7IGJ1dHRvblRleHQgfX1cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hQbGFpZExpbmtCdXR0b25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljS2V5OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBFdmVudDogRXZlbnRFbWl0dGVyPFBsYWlkT25FdmVudEFyZ3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgU3VjY2VzczogRXZlbnRFbWl0dGVyPFBsYWlkT25TdWNjZXNzQXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBMb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIEV4aXQ6IEV2ZW50RW1pdHRlcjxQbGFpZE9uRXhpdEFyZ3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcGlWZXJzaW9uOiBcInYyXCIsXG4gICAgZW52OiBcInNhbmRib3hcIixcbiAgICBpbnN0aXR1dGlvbjogbnVsbCxcbiAgICBzZWxlY3RBY2NvdW50OiBmYWxzZSxcbiAgICB0b2tlbjogbnVsbCxcbiAgICB3ZWJob29rOiBcIlwiLFxuICAgIHByb2R1Y3Q6IFtcImF1dGhcIl0sXG4gICAgY291bnRyeUNvZGVzOiBbXCJVU1wiXSxcbiAgICBzdHlsZToge1xuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzAwODVlNFwiLFxuICAgICAgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6IFwiMzUwbXNcIixcbiAgICAgIFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiOiBcImJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3dcIixcbiAgICAgIFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgICAgXCItd2Via2l0LWFwcGVhcmFuY2VcIjogXCJidXR0b25cIixcbiAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI0cHhcIixcbiAgICAgIFwiYm94LXNoYWRvd1wiOlxuICAgICAgICBcIjAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xKSwgaW5zZXQgMCAxcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKVwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgXCJmb250LXNpemVcIjogXCIyMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgb3V0bGluZTogXCIwXCIsXG4gICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgIFwidGV4dC10cmFuc2Zvcm1cIjogXCJub25lXCIsXG4gICAgICBwYWRkaW5nOiBcIjAgMmVtXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBidXR0b25UZXh0OiBcIkxvZyBJbiBUbyBZb3VyIEJhbmsgQWNjb3VudFwiLFxuICAgIGNsYXNzTmFtZTogXCJwbGFpZC1saW5rLWJ1dHRvblwiLFxuICB9O1xuICBASW5wdXQoKSBhcGlWZXJzaW9uPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuYXBpVmVyc2lvbjtcbiAgQElucHV0KCkgZW52Pzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuZW52O1xuICBASW5wdXQoKSBpbnN0aXR1dGlvbj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLmluc3RpdHV0aW9uO1xuICBASW5wdXQoKSBwcm9kdWN0PzogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZGVmYXVsdFByb3BzLnByb2R1Y3Q7XG4gIEBJbnB1dCgpIHNlbGVjdEFjY291bnQ/OiBib29sZWFuID0gdGhpcy5kZWZhdWx0UHJvcHMuc2VsZWN0QWNjb3VudDtcbiAgQElucHV0KCkgdG9rZW4/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy50b2tlbjtcbiAgQElucHV0KCkgd2ViaG9vaz86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLndlYmhvb2s7XG4gIEBJbnB1dCgpIGNvdW50cnlDb2Rlcz86IHN0cmluZ1tdID0gdGhpcy5kZWZhdWx0UHJvcHMuY291bnRyeUNvZGVzO1xuICBASW5wdXQoKSBzdHlsZT86IGFueSA9IHRoaXMuZGVmYXVsdFByb3BzLnN0eWxlO1xuICBASW5wdXQoKSBidXR0b25UZXh0Pzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuYnV0dG9uVGV4dDtcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuY2xhc3NOYW1lO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXQgbmF0aXZlV2luZG93KCk6IElDdXN0b21XaW5kb3cge1xuICAgIHJldHVybiBnZXRXaW5kb3coKTtcbiAgfVxuXG4gIG9uU2NyaXB0RXJyb3IoKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBpc3N1ZSBsb2FkaW5nIHRoZSBsaW5rLWluaXRpYWxpemUuanMgc2NyaXB0XCIpO1xuICB9XG5cbiAgb25EaXJlY3RpdmVTdWNjZXNzKGV2ZW50OiBQbGFpZE9uU3VjY2Vzc0FyZ3MpIHtcbiAgICB0aGlzLlN1Y2Nlc3MuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkRpcmVjdGl2ZUV4aXQoZXZlbnQ6IFBsYWlkT25FeGl0QXJncykge1xuICAgIHRoaXMuRXhpdC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRGlyZWN0aXZlTG9hZChldmVudCkge1xuICAgIHRoaXMuTG9hZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRGlyZWN0aXZlRXZlbnQoZXZlbnQ6IFBsYWlkT25FdmVudEFyZ3MpIHtcbiAgICB0aGlzLkV2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25EaXJlY3RpdmVDbGljayhldmVudCkge1xuICAgIHRoaXMuQ2xpY2suZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==