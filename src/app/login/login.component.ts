import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
  keyframes,
  AnimationEvent
} from '@angular/animations';

interface AnimatedLetter {
  char: string;
  isTedp: boolean;
  index: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.fade-in', [
          style({ opacity: 0, transform: 'translateY(24px)' }),
          stagger(100, [
            animate('700ms cubic-bezier(.77,0,.18,1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('cardEntrance', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.96) translateY(40px)' }),
        animate('800ms 100ms cubic-bezier(.77,0,.18,1)', style({ opacity: 1, transform: 'none' }))
      ])
    ]),
    trigger('logoEntrance', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.7)' }),
        animate('700ms 200ms cubic-bezier(.77,0,.18,1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('brandNameSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('700ms 400ms cubic-bezier(.77,0,.18,1)', style({ opacity: 1, transform: 'none' }))
      ])
    ]),
    trigger('lineDraw', [
      transition(':enter', [
        style({ width: 0, opacity: 0 }),
        animate('1200ms 300ms cubic-bezier(.77,0,.18,1)', style({ width: '*', opacity: 0.12 }))
      ])
    ]),
    trigger('formFieldStagger', [
      transition(':enter', [
        query('.form-field', [
          style({ opacity: 0, transform: 'translateY(24px)' }),
          stagger(120, [
            animate('600ms cubic-bezier(.77,0,.18,1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    // Enhanced TDEP animations with more sophisticated effects
    trigger('tedpFlyIn', [
      transition(':enter', [
        // Enhanced keyframes with bounce and elastic effects
        animate('1200ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
          style({ 
            opacity: 0, 
            transform: '{{startTransform}} scale(0.3) rotate({{startRotation}}deg)', 
            color: '{{startColor}}',
            textShadow: '0 0 0px {{startColor}}',
            offset: 0 
          }),
          style({ 
            opacity: 0.8, 
            transform: '{{midTransform}} scale(1.2) rotate({{midRotation}}deg)', 
            color: '{{midColor}}',
            textShadow: '0 0 15px {{midColor}}',
            offset: 0.6 
          }),
          style({ 
            opacity: 1, 
            transform: 'none scale(1) rotate(0deg)', 
            color: '#4fd1c5',
            textShadow: '0 0 20px #4fd1c5',
            offset: 0.8 
          }),
          style({ 
            opacity: 1, 
            transform: 'none scale(1) rotate(0deg)', 
            color: '#4fd1c5',
            textShadow: '0 0 10px #4fd1c5',
            offset: 1 
          })
        ]))
      ], { 
        params: { 
          startTransform: 'translateY(-40px)', 
          startRotation: 0,
          startColor: '#1a202c',
          midTransform: 'translateY(-10px)',
          midRotation: 5,
          midColor: '#38b2ac'
        } 
      }),
      transition(':leave', [
        // Enhanced exit animation with fade and scale
        animate('600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
          style({ 
            opacity: 1, 
            transform: 'none scale(1) rotate(0deg)', 
            color: '#4fd1c5',
            textShadow: '0 0 10px #4fd1c5',
            offset: 0 
          }),
          style({ 
            opacity: 0.7, 
            transform: 'scale(1.1) rotate({{exitRotation}}deg)', 
            color: '{{exitColor}}',
            textShadow: '0 0 25px {{exitColor}}',
            offset: 0.3 
          }),
          style({ 
            opacity: 0, 
            transform: 'scale(0.3) rotate({{exitRotation}}deg)', 
            color: '{{exitColor}}',
            textShadow: '0 0 0px {{exitColor}}',
            offset: 1 
          })
        ]))
      ], {
        params: {
          exitRotation: 15,
          exitColor: '#1a202c'
        }
      })
    ]),
    trigger('fullPhraseFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.7)' }),
        animate('700ms 200ms cubic-bezier(.77,0,.18,1)', style({ opacity: 1, transform: 'none' }))
      ]),
      transition(':leave', [
        animate('400ms cubic-bezier(.77,0,.18,1)', style({ opacity: 0, transform: 'scale(0.7)' }))
      ])
    ]),
    trigger('letterAppear', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(24px) scale(0.7)' }),
        animate('400ms cubic-bezier(.77,0,.18,1)', style({ opacity: 1, transform: 'none' }))
      ])
    ]),
    // Enhanced extra letter animations with more dynamic effects
    trigger('extraLetterAppear', [
      transition(':enter', [
        animate('800ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
          style({ 
            opacity: 0, 
            transform: 'translateX(-60px) scale(0.3) rotate(-15deg)', 
            color: '#1a202c',
            textShadow: '0 0 0px #1a202c',
            offset: 0 
          }),
          style({ 
            opacity: 0.6, 
            transform: 'translateX(-20px) scale(1.1) rotate(-5deg)', 
            color: '#38b2ac',
            textShadow: '0 0 15px #38b2ac',
            offset: 0.5 
          }),
          style({ 
            opacity: 0.9, 
            transform: 'translateX(-5px) scale(1.05) rotate(-2deg)', 
            color: '#4fd1c5',
            textShadow: '0 0 20px #4fd1c5',
            offset: 0.8 
          }),
          style({ 
            opacity: 1, 
            transform: 'none scale(1) rotate(0deg)', 
            color: '#4fd1c5',
            textShadow: '0 0 10px #4fd1c5',
            offset: 1 
          })
        ]))
      ]),
      transition(':leave', [
        animate('500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
          style({ 
            opacity: 1, 
            transform: 'none scale(1) rotate(0deg)', 
            color: '#4fd1c5',
            textShadow: '0 0 10px #4fd1c5',
            offset: 0 
          }),
          style({ 
            opacity: 0.5, 
            transform: 'translateX(-20px) scale(0.8) rotate(-10deg)', 
            color: '#38b2ac',
            textShadow: '0 0 15px #38b2ac',
            offset: 0.5 
          }),
          style({ 
            opacity: 0, 
            transform: 'translateX(-60px) scale(0.3) rotate(-20deg)', 
            color: '#1a202c',
            textShadow: '0 0 0px #1a202c',
            offset: 1 
          })
        ]))
      ])
    ]),
    // New animation for TDEP container with pulse effect
    trigger('tedpContainerPulse', [
      transition(':enter', [
        style({ transform: 'scale(0.95)' }),
        animate('1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
          style({ transform: 'scale(0.95)', offset: 0 }),
          style({ transform: 'scale(1.02)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  rememberMe = false;
  showPassword = false;

  headingState: 'tedp' | 'full' = 'tedp';
  tedpLetters = ['T', 'E', 'D', 'P'];
  // Enhanced TDEP animation parameters with more dynamic effects
  tedpDirections = [
    'translateX(-80px)', // T from left
    'translateY(-80px)', // E from top
    'translateY(80px)',  // D from bottom
    'translateX(80px)'   // P from right
  ];
  tedpRotations = [15, -10, 8, -12]; // Different rotation angles for each letter
  tedpColors = ['#1a202c', '#2d3748', '#4a5568', '#718096']; // Different starting colors
  fullPhrase = 'TMA Enterprise Data Platform';
  animatedLetters: AnimatedLetter[] = [];
  private headingInterval: any;

  @ViewChild('loginBgCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private animationFrameId: number | null = null;
  private particles: any[] = [];
  private ctx: CanvasRenderingContext2D | null = null;
  private canvasWidth = 0;
  private canvasHeight = 0;
  private PARTICLE_COUNT = 38;
  private PARTICLE_COLOR = '#4fd1c5'; // $accent
  private LINE_COLOR = 'rgba(34, 48, 74, 0.38)'; // $primary with opacity
  private MAX_DISTANCE = 140;
  private mouseX = 0;
  private mouseY = 0;
  private isMouseOverBackground = false;
  private CURSOR_FOLLOW_STRENGTH = 0.008; // How strongly particles follow cursor
  private SPREAD_VELOCITY = 15.0; // How fast particles spread when not following cursor
  private wasFollowingCursor = false; // Track previous state
  private isSpreading = false; // Track if particles are in spreading mode
  private spreadTimer = 0; // Timer for spreading duration
  private SPREAD_DURATION = 90; // How long to spread (in frames, ~1.5 seconds at 60fps)
  private NORMAL_VELOCITY = 0.7; // Normal floating speed

  ngOnInit() {
    this.animatedLetters = this.getAnimatedLetters();
    this.startHeadingLoop();
  }

  ngAfterViewInit() {
    const canvas = document.querySelector('.login-bg-canvas') as HTMLCanvasElement;
    if (canvas) {
      this.ctx = canvas.getContext('2d');
      this.resizeCanvas(canvas);
      this.initParticles();
      this.animate();
      window.addEventListener('resize', this.handleResize);
      this.setupMouseTracking();
    }
  }

  ngOnDestroy() {
    clearInterval(this.headingInterval);
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseenter', this.handleMouseEnter);
    document.removeEventListener('mouseleave', this.handleMouseLeave);
    window.removeEventListener('blur', this.handleWindowBlur);
    document.removeEventListener('mouseout', this.handleMouseOut);
    document.removeEventListener('pointerleave', this.handlePointerLeave);
  }

  // --- Mouse Tracking Logic ---
  private setupMouseTracking() {
    // Use document-level events for better detection
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseenter', this.handleMouseEnter);
    document.addEventListener('mouseleave', this.handleMouseLeave);
    
    // Additional events for better detection
    window.addEventListener('blur', this.handleWindowBlur);
    document.addEventListener('mouseout', this.handleMouseOut);
    document.addEventListener('pointerleave', this.handlePointerLeave);
  }

  private handleMouseMove = (event: MouseEvent) => {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    
    // Always follow cursor when mouse is moving (unless over login card)
    const loginCard = document.querySelector('.login-card') as HTMLElement;
    if (loginCard) {
      const rect = loginCard.getBoundingClientRect();
      const isOverCard = (
        this.mouseX >= rect.left &&
        this.mouseX <= rect.right &&
        this.mouseY >= rect.top &&
        this.mouseY <= rect.bottom
      );
      this.isMouseOverBackground = !isOverCard;
    } else {
      this.isMouseOverBackground = true;
    }
  };

  private handleMouseEnter = () => {
    // Mouse entered the page - start following (unless over login card)
    const loginCard = document.querySelector('.login-card') as HTMLElement;
    if (loginCard) {
      const rect = loginCard.getBoundingClientRect();
      const isOverCard = (
        this.mouseX >= rect.left &&
        this.mouseX <= rect.right &&
        this.mouseY >= rect.top &&
        this.mouseY <= rect.bottom
      );
      this.isMouseOverBackground = !isOverCard;
    } else {
      this.isMouseOverBackground = true;
    }
  };

  private handleMouseLeave = () => {
    // Mouse left the entire page - stop following and spread particles
    this.isMouseOverBackground = false;
    if (!this.isSpreading) {
      this.spreadParticles();
    }
  };

  private handleWindowBlur = () => {
    // Window lost focus - stop following and spread particles
    this.isMouseOverBackground = false;
    if (!this.isSpreading) {
      this.spreadParticles();
    }
  };

  private handleMouseOut = (event: MouseEvent) => {
    // Check if mouse is leaving the document
    if (!event.relatedTarget || event.relatedTarget === document.body) {
      this.isMouseOverBackground = false;
      if (!this.isSpreading) {
        this.spreadParticles();
      }
    }
  };

  private handlePointerLeave = () => {
    // Pointer left the document - stop following and spread particles
    this.isMouseOverBackground = false;
    if (!this.isSpreading) {
      this.spreadParticles();
    }
  };

  getAnimatedLetters(): AnimatedLetter[] {
    // Mark TEDP letters in the full phrase
    const phrase = this.fullPhrase;
    const tedpIndices = [0, 4, 15, 20]; // T, E, D, P in the phrase
    return phrase.split('').map((char, i) => ({
      char,
      isTedp: tedpIndices.includes(i),
      index: i
    }));
  }

  getTedpFlyInParams(i: number) {
    // Map T, E, D, P to their unique directions with enhanced parameters
    const tedpOrder = [0, 4, 15, 19];
    const idx = tedpOrder.indexOf(i);
    return { 
      value: '', 
      params: { 
        startTransform: this.tedpDirections[idx] || 'translateY(-40px)',
        startRotation: this.tedpRotations[idx] || 0,
        startColor: this.tedpColors[idx] || '#1a202c',
        midTransform: this.tedpDirections[idx] ? 
          this.tedpDirections[idx].replace('-80px', '-20px').replace('80px', '20px') : 
          'translateY(-10px)',
        midRotation: (this.tedpRotations[idx] || 0) * 0.3,
        midColor: '#38b2ac',
        exitRotation: (this.tedpRotations[idx] || 0) * 1.5,
        exitColor: this.tedpColors[idx] || '#1a202c'
      } 
    };
  }

  startHeadingLoop() {
    let state: 'tedp' | 'full' = 'tedp';
    this.headingState = state;
    this.headingInterval = setInterval(() => {
      state = state === 'tedp' ? 'full' : 'tedp';
      this.headingState = state;
    }, 4000); // Increased timing for better animation visibility
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // --- Particle Network Animation Logic ---
  private handleResize = () => {
    const canvas = document.querySelector('.login-bg-canvas') as HTMLCanvasElement;
    if (canvas) {
      this.resizeCanvas(canvas);
      this.initParticles();
    }
  };

  private resizeCanvas(canvas: HTMLCanvasElement) {
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    canvas.width = this.canvasWidth;
    canvas.height = this.canvasHeight;
  }

  private initParticles() {
    this.particles = [];
    for (let i = 0; i < this.PARTICLE_COUNT; i++) {
      this.particles.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        vx: (Math.random() - 0.5) * this.NORMAL_VELOCITY,
        vy: (Math.random() - 0.5) * this.NORMAL_VELOCITY,
        radius: 2 + Math.random() * 2.5
      });
    }
  }

  private spreadParticles() {
    for (const p of this.particles) {
      // Set random target positions across the entire background
      const targetX = Math.random() * this.canvasWidth;
      const targetY = Math.random() * this.canvasHeight;
      
      // Calculate direction to target
      const dx = targetX - p.x;
      const dy = targetY - p.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 0) {
        // Set high velocity towards random target
        p.vx = (dx / distance) * this.SPREAD_VELOCITY;
        p.vy = (dy / distance) * this.SPREAD_VELOCITY;
      }
    }
    this.isSpreading = true;
    this.spreadTimer = this.SPREAD_DURATION;
  }

  private returnToNormalSpeed() {
    for (const p of this.particles) {
      // Return to normal floating velocity
      p.vx = (Math.random() - 0.5) * this.NORMAL_VELOCITY;
      p.vy = (Math.random() - 0.5) * this.NORMAL_VELOCITY;
    }
    this.isSpreading = false;
  }

  private animate = () => {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    // Check if we just stopped following cursor
    if (this.wasFollowingCursor && !this.isMouseOverBackground) {
      this.spreadParticles();
    }
    this.wasFollowingCursor = this.isMouseOverBackground;
    
    // Handle spreading timer
    if (this.isSpreading) {
      this.spreadTimer--;
      if (this.spreadTimer <= 0) {
        this.returnToNormalSpeed();
      }
    }
    
    // Draw lines between close particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.MAX_DISTANCE) {
          this.ctx.strokeStyle = this.LINE_COLOR;
          this.ctx.lineWidth = 3.2 - dist / this.MAX_DISTANCE; // thicker lines
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
    // Draw particles
    for (const p of this.particles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 1.5, 0, 2 * Math.PI); // larger dots
      this.ctx.fillStyle = this.PARTICLE_COLOR;
      this.ctx.globalAlpha = 0.95;
      this.ctx.shadowColor = '#4fd1c5';
      this.ctx.shadowBlur = 10;
      this.ctx.fill();
      this.ctx.globalAlpha = 1.0;
      this.ctx.shadowBlur = 0;
      
      // Cursor following logic
      if (this.isMouseOverBackground) {
        // Reset spreading state when following cursor
        this.isSpreading = false;
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 0) {
          // Gradually move particles towards cursor
          p.x += dx * this.CURSOR_FOLLOW_STRENGTH;
          p.y += dy * this.CURSOR_FOLLOW_STRENGTH;
        }
      } else {
        // Movement when not following cursor
        p.x += p.vx;
        p.y += p.vy;
        
        // Handle edge bouncing for normal movement
        if (!this.isSpreading) {
          if (p.x < 0 || p.x > this.canvasWidth) p.vx *= -1;
          if (p.y < 0 || p.y > this.canvasHeight) p.vy *= -1;
        } else {
          // During spreading, give new targets when reaching edges
          if (p.x < 0 || p.x > this.canvasWidth || p.y < 0 || p.y > this.canvasHeight) {
            const targetX = Math.random() * this.canvasWidth;
            const targetY = Math.random() * this.canvasHeight;
            const dx = targetX - p.x;
            const dy = targetY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 0) {
              p.vx = (dx / distance) * this.SPREAD_VELOCITY;
              p.vy = (dy / distance) * this.SPREAD_VELOCITY;
            }
          }
        }
      }
    }
    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
