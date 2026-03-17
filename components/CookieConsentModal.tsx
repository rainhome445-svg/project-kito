'use client';

import { useAppStore } from '@/lib/store';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function CookieConsentModal() {
  const { isCookieConsentOpen, setCookieConsentOpen } = useAppStore();
  const [activeTab, setActiveTab] = useState<'about' | 'manage'>('about');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'strictly', name: 'Strictly Necessary Cookies', alwaysActive: true, desc: 'These cookies are necessary for the website to function and cannot be switched off in our systems.' },
    { id: 'performance', name: 'Performance Cookies', alwaysActive: false, desc: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.' },
    { id: 'functional', name: 'Functional Cookies', alwaysActive: false, desc: 'These cookies enable the website to provide enhanced functionality and personalisation.' },
    { id: 'targeting', name: 'Targeting Cookies', alwaysActive: false, desc: 'These cookies may be set through our site by our advertising partners.' },
  ];

  const [consent, setConsent] = useState<Record<string, boolean>>({
    performance: true,
    functional: true,
    targeting: false,
  });

  return (
    <AnimatePresence>
      {isCookieConsentOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCookieConsentOpen(false)}
            className="absolute inset-0 bg-overlay-dim backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-surface border border-border-subtle rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-subtle">
              <h2 className="text-xl font-semibold text-text-primary">Privacy Preference Center</h2>
              <button 
                onClick={() => setCookieConsentOpen(false)}
                className="text-text-tertiary hover:text-text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border-subtle px-6">
              <button
                onClick={() => setActiveTab('about')}
                className={cn(
                  'py-4 px-4 text-sm font-medium border-b-2 transition-colors',
                  activeTab === 'about' ? 'border-blue-deep text-blue-deep' : 'border-transparent text-text-secondary hover:text-blue-deep'
                )}
              >
                About Your Privacy
              </button>
              <button
                onClick={() => setActiveTab('manage')}
                className={cn(
                  'py-4 px-4 text-sm font-medium border-b-2 transition-colors',
                  activeTab === 'manage' ? 'border-blue-deep text-blue-deep' : 'border-transparent text-text-secondary hover:text-blue-deep'
                )}
              >
                Manage Consent Preferences
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6">
              {activeTab === 'about' ? (
                <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                  <p>
                    When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to.
                  </p>
                  <p>
                    The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies.
                  </p>
                  <p>
                    Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <div key={cat.id} className="border border-border-subtle rounded-md overflow-hidden">
                      <div 
                        className="flex items-center justify-between p-4 bg-surface-hover/50 cursor-pointer hover:bg-surface-hover transition-colors"
                        onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                      >
                        <div className="flex items-center gap-3">
                          {expandedCategory === cat.id ? <ChevronUp className="w-5 h-5 text-text-tertiary" /> : <ChevronDown className="w-5 h-5 text-text-tertiary" />}
                          <span className="font-medium text-text-primary">{cat.name}</span>
                        </div>
                        <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                          {cat.alwaysActive ? (
                            <span className="text-xs font-medium text-blue-deep uppercase tracking-wider">Always Active</span>
                          ) : (
                            <button
                              onClick={() => setConsent(prev => ({ ...prev, [cat.id]: !prev[cat.id] }))}
                              className={cn(
                                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-deep focus:ring-offset-2 focus:ring-offset-background",
                                consent[cat.id] ? "bg-blue-deep" : "bg-border-subtle"
                              )}
                            >
                              <span
                                className={cn(
                                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                  consent[cat.id] ? "translate-x-6" : "translate-x-1"
                                )}
                              />
                            </button>
                          )}
                        </div>
                      </div>
                      <AnimatePresence>
                        {expandedCategory === cat.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 text-sm text-text-secondary border-t border-border-subtle bg-surface/30">
                              {cat.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border-subtle flex justify-between items-center bg-surface-hover/30">
              <a href="#" className="text-sm text-blue-deep hover:text-text-primary underline transition-colors">Cookie List</a>
              <div className="flex gap-3">
                <button 
                  onClick={() => setCookieConsentOpen(false)}
                  className="px-4 py-2 rounded-md border border-border-subtle text-text-primary hover:bg-surface-hover transition-colors text-sm font-medium"
                >
                  Reject All
                </button>
                <button 
                  onClick={() => setCookieConsentOpen(false)}
                  className="px-4 py-2 rounded-md bg-blue-deep text-white hover:bg-blue-deep/80 transition-colors text-sm font-medium"
                >
                  Confirm My Choices
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
