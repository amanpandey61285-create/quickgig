import { cn } from "@/lib/utils";
import { Banknote, Clock, MapPin, Users } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { SkillTag } from "./SkillTag";
import { StatusBadge } from "./StatusBadge";

export interface JobCardData {
  id: string;
  title: string;
  category: string;
  payAmount: number;
  duration: string;
  timing: string;
  location: string;
  urgent: boolean;
  skillsRequired: string[];
  applicationCount: number;
  status: "open" | "closed" | "completed";
  createdAt?: bigint;
}

interface JobCardProps {
  job: JobCardData;
  onClick?: () => void;
  onApply?: () => void;
  index?: number;
  className?: string;
}

export function JobCard({
  job,
  onClick,
  onApply,
  index = 0,
  className,
}: JobCardProps) {
  const ocid = `job.item.${index + 1}`;
  return (
    <GlassCard
      hover
      padding="md"
      className={cn("cursor-pointer space-y-3", className)}
      onClick={onClick}
      data-ocid={ocid}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {job.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{job.category}</p>
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          {job.urgent && <StatusBadge variant="urgent">Urgent</StatusBadge>}
          <StatusBadge variant={job.status}>
            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
          </StatusBadge>
        </div>
      </div>

      {/* Meta info */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Banknote className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <span className="font-medium text-foreground">₹{job.payAmount}</span>
          <span>/hr</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <span className="truncate">{job.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
          <span className="truncate">{job.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Users className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          <span>{job.applicationCount} applied</span>
        </div>
      </div>

      {/* Skills */}
      {job.skillsRequired.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {job.skillsRequired.slice(0, 3).map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
          {job.skillsRequired.length > 3 && (
            <SkillTag label={`+${job.skillsRequired.length - 3}`} />
          )}
        </div>
      )}

      {/* CTA */}
      {onApply && job.status === "open" && (
        <GradientButton
          variant="primary"
          size="sm"
          fullWidth
          onClick={(e) => {
            e.stopPropagation();
            onApply();
          }}
          data-ocid={`job.apply_button.${index + 1}`}
        >
          Apply Now
        </GradientButton>
      )}
    </GlassCard>
  );
}
