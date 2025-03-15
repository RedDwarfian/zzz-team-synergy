import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNodeVisualComponent } from './agent-node-visual.component';

describe('NodeVisualComponent', () => {
  let component: AgentNodeVisualComponent;
  let fixture: ComponentFixture<AgentNodeVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentNodeVisualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentNodeVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
