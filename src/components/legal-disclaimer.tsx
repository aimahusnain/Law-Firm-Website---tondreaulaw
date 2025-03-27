"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export const LegalDisclaimer = () => {
  return (
    <div className="w-full py-16 bg-black flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-zinc-900 border-zinc-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="p-8 sm:p-10">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white">Legal Notice</h3>
              </div>

              {/* Content with modern layout */}
              <div className="space-y-6">
                <div className="p-5 bg-zinc-800/50 rounded-2xl">
                  <p className="text-white/80 leading-relaxed">
                    Any information obtained on this site is not, nor is it intended to be legal advice. You should
                    consult an attorney for advice regarding your individual situation.
                  </p>
                </div>

                <div className="flex gap-6 flex-col md:flex-row">
                  <div className="flex-1 p-5 bg-zinc-800/50 rounded-2xl">
                    <p className="text-white/80 leading-relaxed">
                      I invite you to contact me. Please do not send any confidential or time-sensitive information
                      until such time as an attorney-client relationship has been established.
                    </p>
                  </div>

                  <div className="flex-1 p-5 bg-zinc-800/50 rounded-2xl">
                    <p className="text-white/80 leading-relaxed">
                      Please note contacting me does not automatically create an attorney-client relationship.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer with subtle divider */}
              <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center">
                <p className="text-zinc-500 text-sm">© 2025 FritzGerald Tondreau Esq.</p>
                <div className="text-zinc-400 text-sm font-medium">Important Information</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

