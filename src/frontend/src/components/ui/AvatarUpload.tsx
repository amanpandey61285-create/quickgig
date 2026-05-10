import { cn } from "@/lib/utils";
import { Camera, User } from "lucide-react";
import { useRef } from "react";

interface AvatarUploadProps {
  src?: string | null;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  editable?: boolean;
  onUpload?: (file: File) => void;
  className?: string;
}

const sizeMap = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-32 h-32",
};

const iconSizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

export function AvatarUpload({
  src,
  alt = "Avatar",
  size = "md",
  editable = false,
  onUpload,
  className,
}: AvatarUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpload) onUpload(file);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && editable)
      inputRef.current?.click();
  };

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden flex-shrink-0",
        sizeMap[size],
        editable && "cursor-pointer group",
        className,
      )}
      onClick={() => editable && inputRef.current?.click()}
      onKeyDown={handleKeyDown}
      role={editable ? "button" : undefined}
      aria-label={editable ? "Upload avatar" : undefined}
      data-ocid={editable ? "avatar.upload_button" : undefined}
      tabIndex={editable ? 0 : undefined}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full glass-card flex items-center justify-center">
          <User className={cn(iconSizeMap[size], "text-muted-foreground")} />
        </div>
      )}

      {editable && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
          <Camera className="w-5 h-5 text-white" />
        </div>
      )}

      {editable && (
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      )}
    </div>
  );
}
