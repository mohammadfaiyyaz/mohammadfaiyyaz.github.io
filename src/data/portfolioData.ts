import { ProjectData, SkillCategory, UnitTestResult } from '../types';

// export const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1mGbstn5IvV9hf6RbYKoiUb9TBAQgzTvh';
// export const RESUME_VIEW_URL = 'https://drive.google.com/file/d/1mGbstn5IvV9hf6RbYKoiUb9TBAQgzTvh/view?usp=sharing';
// export const RESUME_PREVIEW_EMBED = 'https://drive.google.com/file/d/1mGbstn5IvV9hf6RbYKoiUb9TBAQgzTvh/preview';


export const RESUME_DOWNLOAD_URL = '/resume.pdf';
export const RESUME_VIEW_URL = '/resume.pdf';
export const RESUME_PREVIEW_EMBED = '/resume.pdf';


export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1Xq-Pv-m1PLhTeFuUjt83dHJIQoUXeaHA1HBQ8L5MM2pae7NFe2tc5kH8LaBlIHNo_dAag1vXXoGkqmRComl2uLi7auh9LviMSg7d72q7rX0q27AoeI3ROxbOnnMBkqdD7C6D34MfpIixXiwb0CzgXhaCoDN_hUqgScwj4AkE2vWfZ2hZOa6Hw1W4WDqT65yPGQpfQyPZIWkxjBDCx2K3ZvJ6QvvXESEcy0vPCWOFHWyB17sY7ToHwcMlc';
export const DUBAI_SKYLINE_HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGk_I1oFjezd_uOuGyP_xm028pnv-LdN_LJI9s5mC3SfxneO7OCnVR-xkAmthBr3jnRaTPXHSl_uJow-tMH7SLx5YWq_xI0jIfWLJRV7ntgzfnZ13FMqJiDQ7Fm2DuA4mszqfEumkjjw0cSzgAxM05D1ygf02DJuc0HyOo8vXaPgqKZgXqukilC1rUlCTATL52fx1Rh97k9L3ydx_Mhh0UliYU3AKKaFVMEI1UHD3Bu5S6GFyi8BSa9A';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Core',
    description: 'Server runtime, web application patterns, and synchronous API services.',
    icon: 'dns',
    skills: [
      'C#',
      'ASP.NET Core MVC',
      'ASP.NET Core Web API',
      'RESTful APIs',
      'LINQ',
      'Dependency Injection',
      'Clean Architecture',
      'Middleware Pipelines'
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Layer',
    description: 'Reactive single page applications, responsive design, and typed interactions.',
    icon: 'devices',
    skills: [
      'Angular (v14-17)',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Bootstrap 5',
      'Angular Reactive Forms',
      'RxJS Observables'
    ]
  },
  {
    id: 'database',
    title: 'Database & ORM',
    description: 'Relational schema structure, query tuning, and persistence management.',
    icon: 'database',
    skills: [
      'SQL Server',
      'Entity Framework Core',
      'Relational Modeling',
      'Query Optimization',
      'T-SQL Stored Procs',
      'Transactions (ACID)',
      'Index Tuning',
      'Data Migrations'
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    description: 'Version control, engineering patterns, and rigorous architectural quality.',
    icon: 'handyman',
    skills: [
      'Git & GitHub',
      'Clean Architecture',
      'API Integration',
      'Debugging & Profiling',
      'Code Reviews',
      'Postman API Testing',
      'IIS Web Server',
      'Unit Testing (xUnit / NUnit)'
    ]
  }
];

export const PROJECTS: ProjectData[] = [
  {
    id: 'his-platform',
    title: 'Healthcare Management Software (HIS Platform)',
    tag: 'Enterprise Solution',
    statusBadge: 'Professional experience',
    isEnterprise: true,
    shortDesc: 'Hospital management software using C#, ASP.NET Core Web API, Entity Framework Core, and SQL Server.',
    problem: 'The system supports clinical, administrative, and diagnostic workflows across a hospital.',
    solution: 'Worked on backend services and data access for hospital workflows using ASP.NET Core, Entity Framework Core, and SQL Server.',
    keyOutcomes: [
      'Worked on outpatient, inpatient, laboratory, consultation, and billing workflows.',
      'Used LINQ and SQL Server to support reporting and data access.',
      'Contributed to backend API development and application logging.',
      'Worked within healthcare data privacy and confidentiality requirements.'
    ],
    techStack: ['C#', 'ASP.NET Core Web API', 'EF Core', 'SQL Server', 'Angular', 'Dependency Injection'],
    architectureSummary: 'Angular frontend → ASP.NET Core Web API → Entity Framework Core → SQL Server.',
    modules: [
      'OPD (Outpatient Department) Registration & Token Engine',
      'IPD (Inpatient Department) Bed Allocation & Ward Transfer',
      'Doctor Clinical Workbench & Prescription Formatter',
      'Laboratory Investigation Order Tracking & Result Authorization',
      'Patient Billing, Tariff Rules & Insurance Claims Settlement'
    ],
    repoNote: 'Proprietary Enterprise IP • TrioTree Technology Pvt. Ltd.',
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        content: {
          title: 'Mission-Critical Clinical Workflows',
          desc: 'High-concurrency backend services orchestrating clinical care, diagnostic results, and transactional hospital billing without data loss or race conditions.',
          items: [
            'End-to-end appointment lifecycle from check-in to consultation notes',
            'Synchronous diagnostic pathology order processing and verified release',
            'Real-time bed management matrix with occupancy monitoring'
          ]
        }
      },
      {
        id: 'arch',
        label: 'Architecture',
        content: {
          title: 'Decoupled Clean Architecture',
          desc: 'Domain-driven design separating presentation endpoints, application orchestration, domain entities, and SQL Server persistence layers.',
          items: [
            'Automated FluentValidation pipeline behaviors before reaching controller action methods',
            'Unit of Work pattern guaranteeing all-or-nothing multi-table clinical transactions',
            'Centralized ExceptionHandlingMiddleware with RFC 7807 ProblemDetails responses'
          ]
        }
      },
      {
        id: 'stack',
        label: 'Tech Stack',
        content: {
          title: 'Enterprise .NET & SQL Specifications',
          desc: 'Production-tested Microsoft stack with modern TypeScript/Angular frontend integration.',
          items: [
            'C# 10/11 on ASP.NET Core Web API',
            'Entity Framework Core with SQL Server Stored Procedures for complex reports',
            'Angular frontend with Typed Reactive Forms and RxJS stream pipelines'
          ]
        }
      }
    ],
    apiEndpointSample: {
      method: 'POST',
      path: '/api/v1/clinical/encounters',
      description: 'Creates an inpatient clinical encounter with automated bed reservation lock.',
      samplePayload: {
        patientId: 'PAT-88421',
        departmentId: 104,
        attendingDoctorId: 'DOC-501',
        triagePriority: 'Urgent',
        notes: 'Patient admitted for acute monitoring and lab diagnostics.'
      },
      sampleResponse: {
        success: true,
        encounterId: 'ENC-2026-90412',
        bedAssigned: 'WARD-3B-BED-04',
        status: 'ActiveAdmitted',
        timestamp: '2026-10-18T13:00:00Z'
      }
    }
  },
  {
    id: 'zamzam-ecommerce',
    title: 'Zamzam Enterprises E-commerce Platform',
    tag: 'Full-Stack Application',
    statusBadge: 'E-commerce project',
    isEnterprise: false,
    shortDesc: 'Engineered with ASP.NET Core MVC featuring full inventory synchronization, category filtering, cart state management, and secure order processing.',
    problem: 'Commercial retail operation required a reliable web storefront with rapid catalogue browsing, real-time SKU stock validation, and a transactional checkout pipeline resilient against cart inventory conflicts.',
    solution: 'Designed an ASP.NET Core MVC architecture with Entity Framework Core and SQL Server. Implemented optimistic concurrency controls on inventory items, server-side cart session state, and responsive Bootstrap 5 views.',
    keyOutcomes: [
      'High-throughput product matrix with dynamic faceted search and category hierarchy.',
      'Optimistic concurrency checks preventing overselling during flash promotions.',
      'Comprehensive administrative portal for catalog edits, order lifecycle tracking, and stock threshold alerts.'
    ],
    techStack: ['ASP.NET Core MVC', 'C#', 'Entity Framework Core', 'SQL Server', 'Bootstrap 5', 'HTML5/CSS3'],
    architectureSummary: 'Layered MVC pattern separating Presentation (Views & ViewModels), Domain Business Logic (Services), and Data Access (Repository pattern over EF Core DbContext).',
    modules: [
      'Dynamic Product Matrix & SKU Filters',
      'Cart Session State & Inventory Lock',
      'Transactional Checkout with SQL Server',
      'Administrative Inventory Management Dashboard'
    ],
    liveDemoLink: '#',
    githubLink: '#',
    tabs: [
      {
        id: 'zamzam-overview',
        label: 'Overview',
        content: {
          title: 'Scalable Product Catalog & Order Pipeline',
          desc: 'Engineered with ASP.NET Core MVC, Zamzam Enterprises features full inventory synchronization, category filtering, cart state management, and secure order processing. Optimized for commercial speed and structured relational checkout records.',
          items: [
            'Dynamic Product Matrix & SKU Filters',
            'Cart Session State & Inventory Lock',
            'Transactional Checkout with SQL Server',
            'Administrative Inventory Management Dashboard'
          ]
        }
      },
      {
        id: 'zamzam-arch',
        label: 'Architecture',
        content: {
          title: 'Architectural Blueprint',
          desc: 'Layered MVC pattern separating Presentation (Views & ViewModels), Domain Business Logic (Services), and Data Access (Repository pattern over EF Core DbContext). Controllers → Domain Services → EF Core Repositories → SQL Server (Relational Schemas).',
          items: [
            'Separation of Concerns with dedicated ViewModel contracts',
            'EF Core DbContext pooled connections for optimized database throughput',
            'SQL Server indexing on SKU, CategoryId, and ProductPrice'
          ]
        }
      },
      {
        id: 'zamzam-stack',
        label: 'Tech Stack',
        content: {
          title: 'Stack Specification',
          desc: 'Modern Microsoft .NET runtime with battle-tested Bootstrap 5 presentation layer.',
          items: [
            'Runtime: .NET Core 8.0',
            'Language: C# 12',
            'ORM: Entity Framework Core 8.x',
            'Styling: Bootstrap 5 & Custom CSS'
          ]
        }
      }
    ],
    apiEndpointSample: {
      method: 'POST',
      path: '/api/checkout/orders',
      description: 'Submits user cart for transactional validation, inventory reservation, and order creation.',
      samplePayload: {
        customerEmail: 'buyer@example.com',
        shippingAddress: 'Plot 14, Commercial District, Noida',
        items: [
          { sku: 'SKU-ELECT-091', quantity: 2, unitPrice: 1450.0 }
        ]
      },
      sampleResponse: {
        orderId: 'ORD-77421',
        totalAmount: 2900.0,
        orderStatus: 'Confirmed',
        inventoryReserved: true
      }
    }
  },
  {
    id: 'tech-portal',
    title: 'Tech Articles & IT Jobs Portal',
    tag: 'Community & Recruitment Platform',
    statusBadge: 'In progress',
    isEnterprise: false,
    shortDesc: 'An in-progress concept for a platform combining technical articles and IT job listings.',
    problem: 'Software engineers and recruiters need a unified ecosystem to publish in-depth architectural articles while seamlessly discovering verified technical requisitions matching exact engineering stacks.',
    solution: 'The planned platform uses Angular, an ASP.NET Core REST API, and SQL Server. Planned features include article search, publishing tools, and job listings.',
    keyOutcomes: [
      'Sub-second article discovery with SQL Server Full-Text indexing and categorized tag taxonomies.',
      'Reactive Angular applicant forms with client-side resume validation and asynchronous submission status.',
      'Decoupled REST API contracts enabling seamless mobile expansion in the future.'
    ],
    techStack: ['Angular 17 Standalone', 'ASP.NET Core Web API', 'SQL Server 2022', 'TypeScript', 'REST API'],
    architectureSummary: 'Planned stack: Angular, ASP.NET Core Web API, and SQL Server.',
    modules: [
      'Markdown Article Engine with Syntax Highlighting',
      'Recruiter Job Posting & Applicant Pipeline',
      'Filter by Tech Stack (C#, Angular, Azure, SQL Server)',
      'Real-time Application Status Updates'
    ],
    liveDemoLink: '#',
    githubLink: '#',
    tabs: [
      {
        id: 'jobs-arch',
        label: 'Architecture',
        content: {
          title: 'Dual Engine: Knowledge Base + Career Board',
          desc: 'Engineered to serve developer communities with technical documentation and active career openings. Features full-text search capability, reactive Angular article filters, and candidate resume parsing endpoints via ASP.NET Core REST APIs.',
          items: [
            'Decoupled Angular SPA with lazy-loaded route modules',
            'Token-based Bearer authentication for authors and recruiters',
            'SQL Server full-text search catalogue on article content and job descriptions'
          ]
        }
      },
      {
        id: 'jobs-workflow',
        label: 'Publishing Workflow',
        content: {
          title: 'Publishing & Application Lifecycle',
          desc: 'Author submits technical draft → Admin review queue → Published via static CDN cache → Recruiter opens matched requisitions for relevant article readers.',
          items: [
            'Draft submission and revision history tracking',
            'Automated email notifications via SMTP on job application status change',
            'Structured meta tags for search indexation and sharing'
          ]
        }
      },
      {
        id: 'jobs-stack',
        label: 'Tech Specification',
        content: {
          title: 'Technologies Employed',
          desc: 'Built on Angular 17 Standalone components, C# ASP.NET Core Web API, and SQL Server 2022.',
          items: [
            'Angular 17 Standalone Components & RxJS',
            'ASP.NET Core Web API (Minimal APIs & Controller endpoints)',
            'SQL Server 2022 with Full-Text indexing'
          ]
        }
      }
    ],
    apiEndpointSample: {
      method: 'GET',
      path: '/api/jobs?keyword=dot-net&location=noida',
      description: 'Queries active recruiter job openings with indexed keyword search.',
      sampleResponse: {
        totalResults: 12,
        page: 1,
        results: [
          {
            id: 'JOB-301',
            title: 'Senior .NET Developer',
            company: 'Global Healthcare Tech',
            location: 'Noida, India',
            type: 'Full-time',
            requiredSkills: ['C#', 'ASP.NET Core', 'SQL Server', 'Angular']
          }
        ]
      }
    }
  }
];

export const CODE_SNIPPETS = {
  csharpController: `// File: RecruiterEnquiriesController.cs
// Namespace: Portfolio.Api.Controllers
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Api.DTOs;
using Portfolio.Api.Services;
using System;
using System.Threading.Tasks;

namespace Portfolio.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class RecruiterEnquiriesController : ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly IRecruiterEnquiryRepository _repository;
        private readonly ILogger<RecruiterEnquiriesController> _logger;

        public RecruiterEnquiriesController(
            IEmailService emailService,
            IRecruiterEnquiryRepository repository,
            ILogger<RecruiterEnquiriesController> logger)
        {
            _emailService = emailService ?? throw new ArgumentNullException(nameof(emailService));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        /// <summary>
        /// Ingests a validated opportunity enquiry from a verified recruiter.
        /// </summary>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> SubmitEnquiry([FromBody] RecruiterEnquiryDto dto)
        {
            // 1. Anti-spam honeypot defense (bots fill hidden field)
            if (!string.IsNullOrWhiteSpace(dto.HoneypotField))
            {
                _logger.LogWarning("Spam honeypot triggered by client. Silently discarding payload.");
                return Ok(new { success = true, message = "Enquiry processed successfully." });
            }

            // 2. ModelState validation
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid recruiter enquiry model state received: {@ModelState}", ModelState);
                return BadRequest(ModelState);
            }

            try
            {
                // 3. Persist record to SQL Server via Entity Framework Core
                var entity = await _repository.SaveEnquiryAsync(dto);

                // 4. Dispatch authenticated SMTP transmission with Recruiter Reply-To
                await _emailService.SendRecruiterNotificationAsync(dto, entity.Id);

                _logger.LogInformation("Enquiry {Id} from recruiter {Email} successfully processed and queued.", entity.Id, dto.RecruiterEmail);

                return Ok(new 
                { 
                    success = true, 
                    enquiryId = entity.Id,
                    message = "Enquiry received and routed to Mohammad Faiyyaz. Thank you!",
                    timestamp = DateTime.UtcNow
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to process recruiter enquiry from {Email}", dto?.RecruiterEmail);
                return StatusCode(StatusCodes.Status500InternalServerError, new 
                { 
                    success = false, 
                    message = "An internal server error occurred while queuing the message." 
                });
            }
        }
    }
}`,

  smtpService: `// File: SmtpEmailService.cs
// Namespace: Portfolio.Api.Services
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MimeKit;
using Portfolio.Api.DTOs;
using System.Threading.Tasks;

namespace Portfolio.Api.Services
{
    public interface IEmailService
    {
        Task SendRecruiterNotificationAsync(RecruiterEnquiryDto dto, int enquiryId);
    }

    public class SmtpEmailService : IEmailService
    {
        private readonly IConfiguration _config;
        private readonly ILogger<SmtpEmailService> _logger;

        public SmtpEmailService(IConfiguration config, ILogger<SmtpEmailService> logger)
        {
            _config = config;
            _logger = logger;
        }

        public async Task SendRecruiterNotificationAsync(RecruiterEnquiryDto dto, int enquiryId)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Portfolio Engine", _config["Smtp:FromAddress"] ?? "no-reply@faiyyaz.dev"));
            message.To.Add(new MailboxAddress("Mohammad Faiyyaz", _config["Smtp:RecipientEmail"] ?? "fk99810727@gmail.com"));
            
            // Direct Reply-To ensures immediate recruiter response continuity
            message.ReplyTo.Add(new MailboxAddress(dto.RecruiterName, dto.RecruiterEmail));
            message.Subject = $"[Recruiter Inquiry #{enquiryId}] {dto.JobTitle} at {dto.CompanyName}";

            var bodyBuilder = new BodyBuilder
            {
                HtmlBody = $@"
                    <div style='font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0;'>
                        <h2 style='color: #151608;'>New Recruiter Opportunity Received</h2>
                        <hr style='border: 0; border-top: 1px solid #dde3ba; margin: 16px 0;' />
                        <p><strong>Recruiter:</strong> {dto.RecruiterName} (<a href='mailto:{dto.RecruiterEmail}'>{dto.RecruiterEmail}</a>)</p>
                        <p><strong>Company:</strong> {dto.CompanyName}</p>
                        <p><strong>Role Title:</strong> {dto.JobTitle}</p>
                        <p><strong>Location:</strong> {dto.JobLocation} | <strong>Type:</strong> {dto.EmploymentType}</p>
                        {(string.IsNullOrEmpty(dto.PhoneNumber) ? "" : $"<p><strong>Phone:</strong> {dto.PhoneNumber}</p>")}
                        {(string.IsNullOrEmpty(dto.CompanyWebsite) ? "" : $"<p><strong>Company URL:</strong> <a href='{dto.CompanyWebsite}'>{dto.CompanyWebsite}</a></p>")}
                        <div style='margin-top: 16px; padding: 12px; background-color: #fff1e7; border-radius: 6px;'>
                            <strong>Job Description / Opportunity Details:</strong>
                            <p style='white-space: pre-wrap; margin-top: 8px;'>{dto.JobDescription}</p>
                        </div>
                        {(string.IsNullOrEmpty(dto.AdditionalMessage) ? "" : $"<p style='margin-top: 12px;'><strong>Notes:</strong> {dto.AdditionalMessage}</p>")}
                        <hr style='border: 0; border-top: 1px solid #dde3ba; margin: 20px 0;' />
                        <small style='color: #78776e;'>Ingested by Portfolio ASP.NET Core Web API • Auto-dispatched via SMTP</small>
                    </div>"
            };

            message.Body = bodyBuilder.ToMessageBody();

            using var client = new SmtpClient();
            await client.ConnectAsync(
                _config["Smtp:Host"] ?? "smtp.sendgrid.net", 
                int.Parse(_config["Smtp:Port"] ?? "587"), 
                SecureSocketOptions.StartTls);

            await client.AuthenticateAsync(_config["Smtp:User"], _config["Smtp:Pass"]);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);

            _logger.LogInformation("SMTP dispatch completed for Recruiter #{Id}", enquiryId);
        }
    }
}`,

  angularService: `// File: recruiter-enquiry.service.ts
// Angular 17 Standalone Injectable Service
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

export interface RecruiterEnquiryDto {
  recruiterName: string;
  companyName: string;
  recruiterEmail: string;
  phoneNumber?: string;
  jobTitle: string;
  jobLocation: string;
  employmentType: 'Full-time' | 'Contract' | 'Part-time' | 'Other';
  companyWebsite?: string;
  jobDescription: string;
  additionalMessage?: string;
  honeypotField?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  enquiryId?: number;
  timestamp?: string;
  data?: T;
}

@Injectable({
  providedIn: 'root'
})
export class RecruiterEnquiryService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/recruiterenquiries';

  /**
   * Submits recruiter payload to C# ASP.NET Core Web API endpoint
   */
  submitEnquiry(payload: RecruiterEnquiryDto): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, payload).pipe(
      retry(1),
      tap(response => console.log('[RecruiterEnquiryService] Success:', response)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unexpected error occurred while transmitting your enquiry.';
    if (error.error instanceof ErrorEvent) {
      // Client-side network fault
      errorMessage = \`Network error: \${error.error.message}\`;
    } else {
      // Backend returned HTTP 4xx or 5xx
      errorMessage = error.error?.message || \`Server responded with code \${error.status}\`;
    }
    console.error('[RecruiterEnquiryService] Transmission failed:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}`,

  dbContext: `// File: PortfolioDbContext.cs
// Namespace: Portfolio.Api.Data
using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Entities;

namespace Portfolio.Api.Data
{
    public class PortfolioDbContext : DbContext
    {
        public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options)
            : base(options)
        {
        }

        public DbSet<RecruiterEnquiry> RecruiterEnquiries => Set<RecruiterEnquiry>();
        public DbSet<ProjectAuditLog> ProjectAuditLogs => Set<ProjectAuditLog>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<RecruiterEnquiry>(entity =>
            {
                entity.ToTable("RecruiterEnquiries");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.RecruiterName).IsRequired().HasMaxLength(150);
                entity.Property(e => e.CompanyName).IsRequired().HasMaxLength(200);
                entity.Property(e => e.RecruiterEmail).IsRequired().HasMaxLength(256);
                entity.Property(e => e.JobTitle).IsRequired().HasMaxLength(200);
                entity.Property(e => e.JobLocation).IsRequired().HasMaxLength(150);
                entity.Property(e => e.EmploymentType).IsRequired().HasMaxLength(50);
                entity.Property(e => e.JobDescription).IsRequired().HasMaxLength(2000);
                entity.Property(e => e.CreatedAtUtc).HasDefaultValueSql("GETUTCDATE()");

                // SQL Server Indexes for fast recruiter lookups
                entity.HasIndex(e => e.RecruiterEmail).HasDatabaseName("IX_RecruiterEnquiries_Email");
                entity.HasIndex(e => e.CreatedAtUtc).HasDatabaseName("IX_RecruiterEnquiries_CreatedAt");
            });
        }
    }
}`
};

export const UNIT_TESTS: UnitTestResult[] = [
  {
    name: 'SubmitEnquiry_ValidDto_ReturnsOkWithEnquiryId',
    category: 'RecruiterEnquiriesControllerTests',
    status: 'passed',
    durationMs: 42,
    assertion: 'Assert.IsType<OkObjectResult>(result) && Assert.True(response.success)'
  },
  {
    name: 'SubmitEnquiry_WhenHoneypotFilled_SilentlyDiscardsAndReturnsOk',
    category: 'RecruiterEnquiriesControllerTests',
    status: 'passed',
    durationMs: 14,
    assertion: '_emailService.Verify(x => x.SendRecruiterNotificationAsync(...), Times.Never)'
  },
  {
    name: 'SubmitEnquiry_InvalidEmailFormat_ReturnsBadRequest',
    category: 'RecruiterEnquiriesControllerTests',
    status: 'passed',
    durationMs: 23,
    assertion: 'Assert.IsType<BadRequestObjectResult>(result) && ModelState.IsValid == false'
  },
  {
    name: 'SmtpEmailService_ConfiguresDirectReplyToRecruiter',
    category: 'SmtpEmailServiceTests',
    status: 'passed',
    durationMs: 38,
    assertion: 'Assert.Equal("recruiter@company.com", message.ReplyTo.First().Address)'
  },
  {
    name: 'HospitalEncounterService_WhenHighConcurrency_AcquiresRowLockWithoutDeadlock',
    category: 'ClinicalWorkflowTests',
    status: 'passed',
    durationMs: 89,
    assertion: 'Assert.All(parallelTasks, t => Assert.True(t.IsCompletedSuccessfully))'
  },
  {
    name: 'EfCore_QueryOptimization_AvoidsNPlusOneOnEncounterDiagnostics',
    category: 'DataPersistenceTests',
    status: 'passed',
    durationMs: 65,
    assertion: 'Assert.Equal(1, sqlProfiler.ExecutedQueryCount)'
  }
];
