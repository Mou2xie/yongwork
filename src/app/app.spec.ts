import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

/**
 * Root-component tests.
 *
 * The previous version asserted a hard-coded `Hello, yongwork` heading that the
 * application shell never rendered. Per the execution plan (T09 item 6) this was
 * replaced with a durable check of what the root component actually does: it
 * mounts the router outlet that every routed feature renders into.
 */
describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [provideRouter([])],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should mount a router outlet for routed views', async () => {
        const fixture = TestBed.createComponent(App);
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });
});
