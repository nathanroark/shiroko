import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@ui'

export const Route = createLazyFileRoute('/risk-information-sheet/')({
  component: () => (
    <RiskInfoSheet
      riskId="N95-4-20"
      date="09/15/24"
      prob="40%"
      impact="marginal" // 3
      description="End users may resist the SafeHome system. This might be from concerns over complexity, changes in routine, data privacy issues, or distrust in the technology’s reliability."
      refinementContext={[
        'Users might find the system interface too complex or unintuitive, leading to frustration and reluctance to use the system regularly. This could stem from unfamiliar design or lack in quality of documentation.',
        'Users may be concerned about the security and privacy of their personal data. Without clear communication about how data is handled and protected, users might resist using the system.',
        'Users could be resistant to changing their routines or adopting new technology. They may tend to perfer traditional security methods over any new system.',
        'Users may have a general distrust in the reliability of technology. This may lead to them not want to adopt the system over fear of it actually worsening their security or quality of life.'
      ]}
      mitigationMonitoring={[
        'Conduct user testing and feedback sessions to identify pain points and areas of confusion. Use this data to refine the interface and improve user onboarding materials and documentation.',
        'Be as open and transparent as possible about data handling practices. Clearly communicate the measures in place to protect user data and privacy.',
        'Possibly provide users ownership over their own data, allowing them to control what data is collected or even give a self hosted option.',
        'Implement a feedback loop where users can easily report issues or suggestions directly through the app. Regularly review and address common concerns and comments.'
      ]}
      managementContingencyPlan={{
        plan: 'Read carefully into the reason for refunds and respond accordingly, these are likely due to the system malfunctioning or having poor user experience. If the reviews are negative, we will need to address the comments from the reviews and attempt to reach out to the reviewers to see what else we could improve on to ensure their next review would be much more positive',
        trigger:
          'If 10% of products are refunded after installation or if at least 30% of reviews that are coming from the tech communities that we are tageting are negative.'
      }}
      currentStatus="09/15/24: Risk identified."
      originator="N. Roark"
      assigned="K. Preston"
    />
  )
})

interface RiskInfoSheetProps {
  riskId: string
  date: string
  prob: string
  impact: string
  description: string
  refinementContext: string[]
  mitigationMonitoring: string[]
  managementContingencyPlan: {
    plan: string
    trigger: string
  }
  currentStatus: string
  originator: string
  assigned: string
}

function RiskInfoSheet({
  riskId,
  date,
  prob,
  impact,
  description,
  refinementContext,
  mitigationMonitoring,
  managementContingencyPlan,
  currentStatus,
  originator,
  assigned
}: RiskInfoSheetProps) {
  return (
    <div className="pt-4 w-full">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="bg-black/15 dark:bg-black/50 rounded-md p-4 m-1 mb-4">
          <CardTitle className="text-2xl font-bold text-center">
            Risk information sheet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-1">
          <div className="grid grid-cols-4 gap-2 text-sm">
            <div className="border border-border p-2 rounded-md">
              <strong>Risk ID:</strong> {riskId}
            </div>
            <div className="border border-border p-2 rounded-md">
              <strong>Date:</strong> {date}
            </div>
            <div className="border border-border p-2 rounded-md">
              <strong>Prob:</strong> {prob}
            </div>
            <div className="border border-border p-2 rounded-md">
              <strong>Impact:</strong> {impact}
            </div>
          </div>

          <div className="space-y-2 border border-border p-2 rounded-md">
            <strong>Description:</strong>
            <p className="text-sm">{description}</p>
          </div>

          <div className="space-y-2 border border-border p-2 rounded-md">
            <strong>Refinement/context:</strong>
            {refinementContext.map((item, index) => (
              <div key={'refinementContext' + index} className="flex flex-row">
                <div className="text-sm w-[15%]">
                  Subcondition {index + 1}:{' '}
                </div>
                <div className="text-sm w-full">{item}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 border border-border p-2 rounded-md">
            <strong>Mitigation/monitoring:</strong>
            <ol className="list-decimal list-inside text-sm">
              {mitigationMonitoring.map((item, index) => (
                <li
                  key={'mitigationMonitoring' + index}
                  className="flex flex-row"
                >
                  <div className="text-sm w-[3%]">{index + 1}. </div>
                  <div className="text-sm w-full">{item}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-2 border border-border p-2 rounded-md">
            <strong>Management/contingency plan/trigger:</strong>
            <p className="text-sm">{managementContingencyPlan.plan}</p>
            <p className="text-sm">
              <strong>Trigger:</strong> {managementContingencyPlan.trigger}
            </p>
          </div>

          <div className="space-y-2 border border-border p-2 rounded-md">
            <strong>Current status:</strong>
            <p className="text-sm">{currentStatus}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border border-border p-2 rounded-md">
              <strong>Originator:</strong> {originator}
            </div>
            <div className="border border-border p-2 rounded-md">
              <strong>Assigned:</strong> {assigned}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
