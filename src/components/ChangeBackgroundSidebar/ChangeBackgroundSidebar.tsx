import { Button } from "@/components/ui/button"
import { ActionBackIcon, ActionNextIcon, Ai2Icon, AiIcon, CloseIcon } from "../icons"
import { useState } from "react"
import backgroundImage1 from "@/assets/images/background_image_1.png"
import backgroundImage2 from "@/assets/images/background_image_2.png"
import backgroundImage3 from "@/assets/images/background_image_3.png"
import "./change-background-sidebar.css"

interface IChangeBackgroundSidebar {
  onClose: () => void
}

type BackgroundGridImage = {
  id: string
  src: string
  alt: string
}

const MOCK_TEXTAREA_TEXT =
  "Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect."

const BACKGROUND_GRID_IMAGES: readonly BackgroundGridImage[] = [
  { id: "background-1", src: backgroundImage1, alt: "Background preview 1" },
  { id: "background-2", src: backgroundImage2, alt: "Background preview 2" },
  { id: "background-3", src: backgroundImage3, alt: "Background preview 3" },
  { id: "background-4", src: backgroundImage3, alt: "Background preview 4" },
  { id: "background-5", src: backgroundImage3, alt: "Background preview 5" },
  { id: "background-6", src: backgroundImage3, alt: "Background preview 6" },
]

export function ChangeBackgroundSidebar({ onClose }: IChangeBackgroundSidebar) {
  const [backgroundIdea, setBackgroundIdea] = useState(MOCK_TEXTAREA_TEXT)

  return (
    <div className="change-background-sidebar fixed inset-0 z-50 hidden md:flex">
      <button
        type="button"
        aria-label="Close sidebar overlay"
        className="h-full flex-1 bg-black/70"
        onClick={onClose}
      />
      <div className="cbs-panel cbs-scroll">
        <div className="cbs-group">
          <div className="flex flex-row justify-between">
            <h2 className="text-[22px] leading-[1.2] font-bold">Change background</h2>
            <button
              type="button"
              aria-label="Close sidebar"
              className="flex size-6 cursor-pointer items-center justify-center"
              onClick={onClose}
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <div className="cbs-group">
            <div className="flex flex-col gap-3">
              <p className="cbs-label">Background idea</p>
              <div className="cbs-textarea-shell">
                <div className="cbs-textarea-inner">
                  <textarea
                    id="background-idea"
                    name="backgroundIdea"
                    value={backgroundIdea}
                    onChange={(event) => setBackgroundIdea(event.target.value)}
                    className="cbs-textarea"
                  />
                </div>
                <div className="cbs-textarea-actions">
                  <Button variant="sidebar-ghost" size="sidebar-regenerate">
                    <AiIcon className="size-[18px] shrink-0" />
                    Regenerate
                  </Button>
                  <div className="cbs-action-buttons">
                    <button
                      type="button"
                      aria-label="Previous option"
                      className="cbs-action-icon-button"
                    >
                      <ActionBackIcon className="size-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next option"
                      className="cbs-action-icon-button"
                    >
                      <ActionNextIcon className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="sidebar-primary" size="sidebar-primary" className="w-full cursor-pointer">
              <Ai2Icon className="size-4 shrink-0" />
              Generate BG for 1 credit
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="cbs-label">Your backgrounds</p>
          <div className="cbs-grid">
            {BACKGROUND_GRID_IMAGES.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="cbs-grid-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
