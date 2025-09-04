import { useEffect, useState } from 'react';

interface TechNode {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  glow: number;
  type: 'node' | 'code' | 'circuit';
  isBurst?: boolean;
  life?: number;
  maxLife?: number;
}

const codeSnippets = ['{ }', '< />', '[ ]', '( )', 'fn', 'if', '&&', '||', '===', '=>', '++', '--'];

export function ParticlesBackground() {
  const [nodes, setNodes] = useState<TechNode[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [burstNodes, setBurstNodes] = useState<TechNode[]>([]);
  const [nextBurstId, setNextBurstId] = useState(1000);

  useEffect(() => {
    const createNodes = () => {
      const newNodes: TechNode[] = [];
      const nodeCount = 30;

      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 4,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          glow: Math.random(),
          type: i % 3 === 0 ? 'code' : i % 3 === 1 ? 'circuit' : 'node',
        });
      }

      setNodes(newNodes);
    };

    createNodes();

    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        x: (node.x + node.speedX + 100) % 100,
        y: (node.y + node.speedY + 100) % 100,
        glow: (node.glow + 0.02) % 1,
      })));
      
      // Update burst nodes
      setBurstNodes(prev => prev
        .map(node => ({
          ...node,
          x: node.x + node.speedX,
          y: node.y + node.speedY,
          life: (node.life || 0) + 1,
          glow: (node.glow + 0.05) % 1,
        }))
        .filter(node => (node.life || 0) < (node.maxLife || 60))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleClick = (e: MouseEvent) => {
      const clickX = (e.clientX / window.innerWidth) * 100;
      const clickY = (e.clientY / window.innerHeight) * 100;
      
      // Create burst of particles at click location
      const burstCount = 12;
      const newBurstNodes: TechNode[] = [];
      
      for (let i = 0; i < burstCount; i++) {
        const angle = (i / burstCount) * Math.PI * 2;
        const speed = 0.3 + Math.random() * 0.4;
        
        newBurstNodes.push({
          id: nextBurstId + i,
          x: clickX,
          y: clickY,
          size: Math.random() * 8 + 4,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          glow: Math.random(),
          type: ['node', 'code', 'circuit'][Math.floor(Math.random() * 3)] as 'node' | 'code' | 'circuit',
          isBurst: true,
          life: 0,
          maxLife: 40 + Math.random() * 20,
        });
      }
      
      setBurstNodes(prev => [...prev, ...newBurstNodes]);
      setNextBurstId(prev => prev + burstCount);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [nextBurstId]);

  const allNodes = [...nodes, ...burstNodes];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" style={{ pointerEvents: 'auto' }}>
      {/* Dynamic gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(14, 165, 233, 0.15), transparent 50%)`,
        }}
      />
      
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full circuit-pattern"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(14, 165, 233, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            backgroundPosition: '0 0, 0 0, 0 0, 0 0',
          }}
        />
      </div>

      {/* Tech nodes */}
      {allNodes.map((node) => {
        const glowIntensity = Math.sin(node.glow * Math.PI * 2) * 0.5 + 0.5;
        const distanceToMouse = Math.sqrt(
          Math.pow(node.x - mousePos.x, 2) + Math.pow(node.y - mousePos.y, 2)
        );
        const mouseEffect = Math.max(0, 1 - distanceToMouse / 30);
        
        // For burst particles, add fade out effect
        const burstFade = node.isBurst && node.life && node.maxLife 
          ? Math.max(0, 1 - (node.life / node.maxLife)) 
          : 1;

        if (node.type === 'code') {
          return (
            <div
              key={`code-${node.id}`}
              className="absolute text-accent font-mono text-sm font-bold transition-all duration-300"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                opacity: (0.4 + glowIntensity * 0.4 + mouseEffect * 0.3) * burstFade,
                transform: `translate(-50%, -50%) scale(${1 + mouseEffect * 0.5})`,
                textShadow: `0 0 ${5 + mouseEffect * 15}px rgba(34, 197, 94, 0.8)`,
              }}
            >
              {codeSnippets[node.id % codeSnippets.length]}
            </div>
          );
        }

        if (node.type === 'circuit') {
          return (
            <div
              key={`circuit-${node.id}`}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translate(-50%, -50%) rotate(${node.glow * 360}deg)`,
              }}
            >
              <div
                className="w-3 h-3 border-2 border-primary rotate-45"
                style={{
                  opacity: (0.5 + glowIntensity * 0.5 + mouseEffect * 0.4) * burstFade,
                  boxShadow: `0 0 ${8 + mouseEffect * 12}px rgba(14, 165, 233, 0.8)`,
                  backgroundColor: mouseEffect > 0.3 ? 'rgba(14, 165, 233, 0.3)' : 'transparent',
                }}
              />
            </div>
          );
        }

        return (
          <div
            key={`node-${node.id}`}
            className="absolute rounded-full border-2 border-accent"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size + mouseEffect * 8}px`,
              height: `${node.size + mouseEffect * 8}px`,
              opacity: (0.6 + glowIntensity * 0.4 + mouseEffect * 0.3) * burstFade,
              transform: `translate(-50%, -50%)`,
              boxShadow: `0 0 ${10 + mouseEffect * 20}px rgba(34, 197, 94, 0.8)`,
              backgroundColor: mouseEffect > 0.2 ? 'rgba(34, 197, 94, 0.2)' : 'transparent',
            }}
          />
        );
      })}

      {/* Connecting lines between nearby nodes */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.6)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.6)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.6)" />
          </linearGradient>
        </defs>
        
        {allNodes.map((node, index) => {
          return allNodes.slice(index + 1).map((otherNode, otherIndex) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            
            if (distance < 25) {
              return (
                <line
                  key={`connection-${node.id}-${otherNode.id}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  opacity={Math.max(0, 1 - distance / 25) * 0.6}
                  className="connection-line"
                />
              );
            }
            return null;
          });
        })}
      </svg>

      {/* Animated data streams */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}