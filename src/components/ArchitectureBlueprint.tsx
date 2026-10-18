import React, { useState } from 'react';
import { CODE_SNIPPETS, UNIT_TESTS } from '../data/portfolioData';
import { UnitTestResult } from '../types';

export const ArchitectureBlueprint: React.FC = () => {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'controller' | 'smtp' | 'angular' | 'dbcontext' | 'testrunner'>('controller');
  const [copied, setCopied] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<UnitTestResult[]>(UNIT_TESTS);
  const [isRunningTests, setIsRunningTests] = useState<boolean>(false);
  const [simulatedApiResponse, setSimulatedApiResponse] = useState<Record<string, unknown> | null>(null);
  const [isSimulatingPost, setIsSimulatingPost] = useState<boolean>(false);

  const getActiveCode = () => {
    switch (activeSnippetTab) {
      case 'controller':
        return CODE_SNIPPETS.csharpController;
      case 'smtp':
        return CODE_SNIPPETS.smtpService;
      case 'angular':
        return CODE_SNIPPETS.angularService;
      case 'dbcontext':
        return CODE_SNIPPETS.dbContext;
      default:
        return '';
    }
  };

  const handleCopyCode = () => {
    const code = getActiveCode();
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRunTests = () => {
    setIsRunningTests(true);
    setTimeout(() => {
      setTestResults(
        UNIT_TESTS.map((t) => ({
          ...t,
          durationMs: Math.floor(Math.random() * 40) + 15
        }))
      );
      setIsRunningTests(false);
    }, 600);
  };

  const handleSimulateApiCall = () => {
    setIsSimulatingPost(true);
    setSimulatedApiResponse(null);
    setTimeout(() => {
      setIsSimulatingPost(false);
      setSimulatedApiResponse({
        statusCode: 200,
        statusText: 'OK',
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'server': 'Kestrel / Microsoft-IIS',
          'x-powered-by': 'ASP.NET Core 8.0'
        },
        body: {
          success: true,
          enquiryId: Math.floor(Math.random() * 8000) + 1000,
          message: 'Enquiry received and routed to Mohammad Faiyyaz. Direct recruiter Reply-To configured.',
          sqlAudit: {
            command: 'INSERT INTO [RecruiterEnquiries] ([RecruiterName], [CompanyName], [CreatedAtUtc]) VALUES (@p0, @p1, GETUTCDATE());',
            rowsAffected: 1,
            isolationLevel: 'ReadCommitted'
          },
          smtpAudit: {
            connected: true,
            host: 'smtp.sendgrid.net:587',
            tls: 'StartTls (TLS 1.3)',
            replyToConfigured: true
          },
          timestamp: new Date().toISOString()
        }
      });
    }, 850);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#fff8f5]" id="architecture">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-[#5b6141] tracking-widest block">
              08 // Code Quality Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#241a0f] tracking-tight mt-1">
              Backend &amp; Architecture Blueprint
            </h2>
          </div>
          <p className="text-[15px] text-[#47473f] max-w-sm">
            Production-grade ASP.NET Core &amp; Angular contracts powering the recruiter ingestion pipeline.
          </p>
        </div>

        {/* Code Workbench Box */}
        <div className="bg-[#fff1e7] rounded-2xl shadow-sm border border-[#f4dfce] overflow-hidden">
          {/* Tab Bar */}
          <div className="bg-[#f9e4d4] px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#f4dfce]">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setActiveSnippetTab('controller')}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors ${
                  activeSnippetTab === 'controller'
                    ? 'bg-[#151608] text-white shadow-sm'
                    : 'bg-[#ffeada] text-[#241a0f] hover:text-[#5b6141]'
                }`}
              >
                RecruiterEnquiriesController.cs
              </button>

              <button
                type="button"
                onClick={() => setActiveSnippetTab('smtp')}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors ${
                  activeSnippetTab === 'smtp'
                    ? 'bg-[#151608] text-white shadow-sm'
                    : 'bg-[#ffeada] text-[#241a0f] hover:text-[#5b6141]'
                }`}
              >
                SmtpEmailService.cs
              </button>

              <button
                type="button"
                onClick={() => setActiveSnippetTab('angular')}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors ${
                  activeSnippetTab === 'angular'
                    ? 'bg-[#151608] text-white shadow-sm'
                    : 'bg-[#ffeada] text-[#241a0f] hover:text-[#5b6141]'
                }`}
              >
                recruiter-enquiry.service.ts
              </button>

              <button
                type="button"
                onClick={() => setActiveSnippetTab('dbcontext')}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors ${
                  activeSnippetTab === 'dbcontext'
                    ? 'bg-[#151608] text-white shadow-sm'
                    : 'bg-[#ffeada] text-[#241a0f] hover:text-[#5b6141]'
                }`}
              >
                PortfolioDbContext.cs (EF Core)
              </button>

              <button
                type="button"
                onClick={() => setActiveSnippetTab('testrunner')}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors flex items-center gap-1.5 ${
                  activeSnippetTab === 'testrunner'
                    ? 'bg-[#5b6141] text-white shadow-sm'
                    : 'bg-[#dde3ba] text-[#191e05] hover:bg-[#c4caa2]'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">play_circle</span>
                <span>API &amp; xUnit Test Runner</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              {activeSnippetTab !== 'testrunner' && (
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-[#ffeada] text-[#241a0f] rounded-lg font-mono text-xs border border-[#f4dfce] transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? 'done' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              )}
              <span className="font-mono text-xs text-[#5b6141] font-semibold hidden md:inline">
                .NET 8 / C# 12 / Angular 17
              </span>
            </div>
          </div>

          {/* Code Viewer Panel */}
          {activeSnippetTab !== 'testrunner' ? (
            <div className="p-6 bg-[#151608] overflow-x-auto text-white">
              <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-[#f4dfcc]">
                <code>{getActiveCode()}</code>
              </pre>
            </div>
          ) : (
            /* Interactive xUnit Test Runner & API Simulator */
            <div className="p-6 sm:p-8 bg-white flex flex-col gap-8">
              {/* Top Action Simulator */}
              <div className="bg-[#fff1e7] p-5 sm:p-6 rounded-xl border border-[#f4dfce] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-[#241a0f] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#5b6141]">terminal</span>
                    Simulate ASP.NET Core Web API Execution
                  </h4>
                  <p className="text-xs sm:text-sm text-[#47473f] mt-1">
                    Execute a simulated <code className="bg-white px-1.5 py-0.5 rounded font-mono text-xs text-[#5b6141]">POST /api/recruiterenquiries</code> request to inspect status codes, EF Core queries, and SMTP delivery.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleSimulateApiCall}
                    disabled={isSimulatingPost}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#151608] hover:bg-[#5b6141] text-white rounded-full text-xs font-semibold transition-all disabled:opacity-75"
                  >
                    <span className={`material-symbols-outlined text-[16px] ${isSimulatingPost ? 'animate-spin' : ''}`}>
                      {isSimulatingPost ? 'progress_activity' : 'send'}
                    </span>
                    <span>{isSimulatingPost ? 'Executing Endpoint...' : 'Send Test Request'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleRunTests}
                    disabled={isRunningTests}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b6141] hover:bg-[#151608] text-white rounded-full text-xs font-semibold transition-all disabled:opacity-75"
                  >
                    <span className={`material-symbols-outlined text-[16px] ${isRunningTests ? 'animate-spin' : ''}`}>
                      {isRunningTests ? 'refresh' : 'play_arrow'}
                    </span>
                    <span>Run xUnit Tests</span>
                  </button>
                </div>
              </div>

              {/* Simulated API Response Display */}
              {simulatedApiResponse && (
                <div className="bg-[#151608] text-white p-5 rounded-xl border border-[#292b1b]">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#292b1b]">
                    <span className="font-mono text-xs text-[#dde3ba] font-bold">
                      HTTP/1.1 200 OK — Response Payload
                    </span>
                    <span className="px-2.5 py-0.5 rounded font-mono text-[11px] bg-[#5b6141] text-white">
                      Kestrel Web Server
                    </span>
                  </div>
                  <pre className="font-mono text-xs text-[#e0e6bd] overflow-x-auto leading-relaxed">
                    {JSON.stringify(simulatedApiResponse, null, 2)}
                  </pre>
                </div>
              )}

              {/* xUnit Test Suite Results */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#5b6141]">
                    Backend &amp; Service Unit Tests (xUnit)
                  </h4>
                  <span className="text-xs font-mono text-[#241a0f]">
                    {testResults.length} / {testResults.length} Passed (100% Success)
                  </span>
                </div>

                <div className="space-y-2.5">
                  {testResults.map((test, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#fff8f5] rounded-xl border border-[#f4dfce] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-start sm:items-center gap-2.5">
                        <span className="material-symbols-outlined text-[#5b6141] text-[18px] shrink-0 mt-0.5 sm:mt-0">
                          check_circle
                        </span>
                        <div>
                          <span className="font-mono font-bold text-[#241a0f] block sm:inline">
                            {test.name}
                          </span>
                          <span className="text-[#78776e] sm:ml-2 block sm:inline">
                            [{test.category}]
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 self-end sm:self-auto font-mono text-[11px]">
                        <span className="text-[#5b6141]">{test.durationMs}ms</span>
                        <span className="px-2 py-0.5 rounded bg-[#dde3ba] text-[#191e05] font-bold uppercase">
                          PASSED
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
